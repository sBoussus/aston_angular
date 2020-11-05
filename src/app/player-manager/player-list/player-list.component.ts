import { switchMap } from 'rxjs/operators';
import { PlayerService } from './../player.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: any = [];

  constructor(
    private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.playerService
      .getPlayers()
      .pipe(
        switchMap((players: any) => players),
      )
      .subscribe(player => {
        this.players.push(player);
      });
  }

}
