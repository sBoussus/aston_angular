import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../interfaces';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  @Output() changeState: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  injure() {
    this.player.injured = !this.player.injured;
    this.changeState.emit(this.player.lastname);
  }

}
