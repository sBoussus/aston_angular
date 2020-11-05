import { PlayerService } from './../player.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  player = {
    lastname: '',
    firstname: '',
    teamid: 1,
    position: 'gardien',
    age: 0
  }

  @Output() formToList: EventEmitter<any> = new EventEmitter();

  constructor(
    private playerService: PlayerService) {
  }

  ngOnInit(): void {
  }

  createPlayer() {
    this.playerService
      .postPlayer(this.player)
      .subscribe(res => console.log(res));
    this.formToList.emit('reloadPlayers');
  }

}