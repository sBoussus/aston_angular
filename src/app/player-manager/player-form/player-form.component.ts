import { PlayerService } from './../player.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  player = {
    lastname: '',
    firstname: '',
    teamId: 1,
    position: 'gardien',
    age: 0
  }

  constructor(
    private playerService: PlayerService) {
  }

  ngOnInit(): void {
  }

  createPlayer() {
    this.playerService
      .postPlayer(this.player)
      .subscribe(res => console.log(res))
  }

  
}
