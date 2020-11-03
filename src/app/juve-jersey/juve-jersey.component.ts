import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juve-jersey',
  templateUrl: './juve-jersey.component.html',
  styleUrls: ['./juve-jersey.component.css']
})
export class JuveJerseyComponent implements OnInit {

  playerFlockage: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeFlockingPlayer(flockingState: any) {
    console.log('change');
    this.playerFlockage = [flockingState];
    console.log(this.playerFlockage);
  }

}
