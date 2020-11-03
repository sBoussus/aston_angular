import { Component, OnInit, ViewChild } from '@angular/core';
import { JuveJerseyPriceComponent } from '../juve-jersey-price/juve-jersey-price.component';

@Component({
  selector: 'app-juve-jersey',
  templateUrl: './juve-jersey.component.html',
  styleUrls: ['./juve-jersey.component.css']
})
export class JuveJerseyComponent implements OnInit {

  flockingState: any[] = [];
  badgesState: number = 0;
  quantityState: number = 1;
  mainImageIndex: number = 0;

  @ViewChild(JuveJerseyPriceComponent) totalPrice: JuveJerseyPriceComponent;

  constructor() { }

  ngOnInit(): void {
  }

  changeFlockingPlayer(flockingState: any) {
    this.flockingState = [flockingState];
    this.totalPrice.changeTotalPrice(this.flockingState, this.badgesState, this.quantityState);
  }

  changeBadges(event: any){
    let checkState = event.target.checked;
    if (checkState) {
      this.badgesState++;
    } else {
      this.badgesState--;
    }
    this.totalPrice.changeTotalPrice(this.flockingState, this.badgesState, this.quantityState);
  }

  changeQuantity(event: any){
    let newQuantityValue = event.target.value;
    this.quantityState = newQuantityValue;
    this.totalPrice.changeTotalPrice(this.flockingState, this.badgesState, this.quantityState);
  }

  changeMainImageIndex(index: number) {
    this.mainImageIndex = index;
  }

}
