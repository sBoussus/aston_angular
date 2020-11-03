import { JuvePlayersService } from './../services/juve-players.service';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-juve-jersey-flocking',
  templateUrl: './juve-jersey-flocking.component.html',
  styleUrls: ['./juve-jersey-flocking.component.css']
})
export class JuveJerseyFlockingComponent implements OnInit {

  juvePlayers: any[];
  @Output() changeFlockingState: EventEmitter<any> = new EventEmitter();

  constructor(private juvePlayersService: JuvePlayersService) {
    this.juvePlayers = this.juvePlayersService.getJuvePlayers();
  }

  ngOnInit(): void {
  }

  selectFlockage(event?: any) {
    let selectedPlayerIndex = 0;
    if (event) {
      selectedPlayerIndex = event.target.options.selectedIndex;
    }
    let selectedPlayer = this.juvePlayers[selectedPlayerIndex];
    console.log(selectedPlayer);
    this.changeFlockingState.emit(selectedPlayer);
  }

}
