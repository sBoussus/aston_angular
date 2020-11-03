import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juve-jersey',
  templateUrl: './juve-jersey.component.html',
  styleUrls: ['./juve-jersey.component.css']
})
export class JuveJerseyComponent implements OnInit {

  flockageState: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeFlockingPlayer(flockingState: any) {
    console.log('change');
    this.flockageState = [flockingState];
    console.log(this.flockageState);
  }

}
