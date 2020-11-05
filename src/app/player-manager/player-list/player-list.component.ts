import { switchMap } from 'rxjs/operators';
import { PlayerService } from './../player.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  public players: any = [];
  positionFilter: string = '';
  teamIdFilter: number = 0;

  constructor(
    private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.loadPlayers();
  }

  // ngDoCheck(): void {
  //   this.players = [];
  //   this.loadPlayers();
  // }

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
        this.players = players;
      });
  }

  changeTeamIdFilter(event: any) {
    let { value } = event.target;

    if (value !== '-') {
      this.playerService
        .getPlayers()
        .subscribe((players: any[]) => {
          this.players = players.filter((player: any) => {
            return player.teamid == value;
          });
        });
    } else {
      this.reloadPlayers();
    }

  }

  changePositionFilter(event: any) {
    let { value } = event.target;

    if (value !== '-') {
      this.playerService
        .getPlayers()
        .subscribe((players: any[]) => {
          this.players = players.filter((player: any) => {
            return player.position === value;
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

}
