import { PlayerFormComponent } from './../player-form/player-form.component';
import { PlayerListComponent } from './../player-list/player-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild(PlayerListComponent) playerListComponent: PlayerListComponent;
  @ViewChild(PlayerFormComponent) playerFormComponent: PlayerFormComponent;

  constructor() { }

  ngOnInit(): void {
  }

  listToForm(event: any) {
    if (event.action === 'editMode') {
      this.playerFormComponent.loadPlayer(event.id);
    } else {
      console.log('Erreur');
      console.log('Mauvais paramètre: ' + event);
    }
  }

  formToList(event: string) {
    if (event === 'reloadPlayers') {
      this.playerListComponent.reloadPlayers();
    } else {
      console.log('Erreur');
      console.log('Mauvais paramètre: ' + event);
    }
  }

}
