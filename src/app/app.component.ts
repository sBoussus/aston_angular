import { JuvePlayersService } from './services/juve-players.service';
import { FruitService } from './services/fruit.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
  fruits: string[];
  juvePlayers: any[];

  constructor(private fruitService: FruitService, private juvePlayersService: JuvePlayersService) {
    this.fruits = this.fruitService.getFruits();
    this.juvePlayers = this.juvePlayersService.getJuvePlayers();
  }

}
