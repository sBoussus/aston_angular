import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-juve-jersey-price',
  templateUrl: './juve-jersey-price.component.html',
  styleUrls: ['./juve-jersey-price.component.css']
})
export class JuveJerseyPriceComponent implements OnInit {

  totalPrice: number = 120;

  constructor() { }

  ngOnInit(): void {
  }

  changeTotalPrice(flockingState: any[], badgesState: number, quantityState: number) {
    let basePrice: number = 120;
    let flockingPrice = 0;
    if(flockingState[0]) {
      flockingPrice = 10;
    }
    this.totalPrice = (basePrice + flockingPrice + (badgesState * 10)) * quantityState;
    console.log(this.totalPrice);
  }

}
