import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API: string = "http://localhost:3000/players";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers(): any {
    return this.http.get(API);
  }

  getPlayerById(id: number): any {
    return this.http.get(API + '/' + id);
  }

  postPlayer(player: any): any {
    return this.http.post(API, player);
  }

}