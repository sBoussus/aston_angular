import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuvePlayersService {
  private juvePlayers: any[] = [
    {
      num: 3,
      name: 'Chiellini'
    },
    {
      num: 4,
      name: 'De Ligt'
    },
    {
      num: 5,
      name: 'Arthur'
    },
    {
      num: 6,
      name: 'Khedira'
    },
    {
      num: 7,
      name: 'Ronaldo'
    },
    {
      num: 8,
      name: 'Ramsey'
    },
    {
      num: 9,
      name: 'Morata'
    },
    {
      num: 10,
      name: 'Dybala'
    },
  ];

  constructor() { }

  getJuvePlayers() {
    return this.juvePlayers;
  }

}
