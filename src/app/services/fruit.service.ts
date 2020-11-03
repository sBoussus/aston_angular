import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private fruits: string[] = ['cerise', 'pomme', 'kiwi'];

  constructor() { }

  getFruits() {
    return this.fruits;
  }
  
}
