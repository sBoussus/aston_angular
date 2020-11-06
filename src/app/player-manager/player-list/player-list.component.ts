import { switchMap } from 'rxjs/operators';
import { PlayerService } from './../player.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  public players: any = [];
  teamIdFilter: number | '-' = '-';
  positionFilter: string = '-';

  @Output() listToForm: EventEmitter<any> = new EventEmitter();

  constructor(
    private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerService
      .getPlayers()
      .pipe(
        switchMap((players: any) => players),
      )
      .subscribe((player: any) => {
        this.players.push(player);
      });
  }

  reloadPlayers() {
    this.playerService
      .getPlayers()
      .subscribe((players: any[]) => {
        this.players = players.filter((player: any) => {
          let result = false;
          if (this.teamIdFilter === '-' || player.teamid == this.teamIdFilter) {
            if (this.positionFilter === '-' || player.position === this.positionFilter) {
              result = true;
            }
          }
          return result;
        });
      });
  }

  changeTeamIdFilter(event: any) {
    let { value } = event.target;
    this.teamIdFilter = value;
    if (value !== '-') {      
      this.playerService
        .getPlayers()
        .subscribe((players: any[]) => {
          this.players = players.filter((player: any) => {
            let result = false;
            if (player.teamid == value) {
              if (this.positionFilter === '-' || player.position === this.positionFilter) {
                result = true;
              }
            }
            return result;
          });
        });
    } else {
      this.reloadPlayers();
    }

  }

  changePositionFilter(event: any) {
    let { value } = event.target;
    this.positionFilter = value;

    if (value !== '-') {
      this.playerService
        .getPlayers()
        .subscribe((players: any[]) => {
          this.players = players.filter((player: any) => {
            let result = false;
            if (player.position === value) {
              if (this.teamIdFilter === '-' || player.teamid == this.teamIdFilter) {
                result = true;
              }
            }
            return result;
          });
        });
    } else {
      this.reloadPlayers();
    }

  }

  supprPlayer(event: any, playerId: number) {
    this.playerService
      .deletePlayer(playerId)
      .subscribe(res => console.log(res));
    this.reloadPlayers();
  }

  launchEditMode(playerId: number) {
    let parameters = {
      action: 'editMode',
      id: playerId
    };
    this.listToForm.emit(parameters);
  }

}
