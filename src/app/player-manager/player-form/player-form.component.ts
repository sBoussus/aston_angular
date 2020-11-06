import { PlayerService } from './../player.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  player: any = {
    lastname: '',
    firstname: '',
    teamid: 1,
    position: 'gardien',
    age: 0
  };
  editMode: boolean = false;

  @Output() formToList: EventEmitter<any> = new EventEmitter();

  constructor(
    private playerService: PlayerService) {
  }

  ngOnInit(): void {
  }

  resetPlayer() {
    this.player = {
      lastname: '',
      firstname: '',
      teamid: 1,
      position: 'gardien',
      age: 0
    };
  }

  createPlayer() {
    this.playerService
      .postPlayer(this.player)
      .subscribe(res => {
        this.formToList.emit('reloadPlayers');
        this.resetPlayer();
      });
  }

  loadPlayer(playerId: number) {
    this.playerService
      .getPlayerById(playerId)
      .subscribe((player: any) => {
        this.player = player;
        this.editMode = true;
      });
  }

  updatePlayer() {
    this.playerService
      .putPlayer(this.player.id, this.player)
      .subscribe(res => {
        this.formToList.emit('reloadPlayers');
        this.editMode = false;
        this.resetPlayer();
      });
  }

}