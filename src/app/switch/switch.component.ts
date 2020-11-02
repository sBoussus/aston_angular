import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  switchPosition: boolean = false;
  switchText: string = 'non';
  switchClass: string = 'non';

  constructor() { }

  ngOnInit(): void {
  }

  changeSwitch() {
    this.switchPosition = !this.switchPosition;
    if(this.switchPosition) {
      this.switchClass = 'oui';
      this.switchText = 'oui';
      console.log(1);
    } else {
      this.switchClass = 'non';
      this.switchText = 'non';
      console.log(0);
    }
  }

}
