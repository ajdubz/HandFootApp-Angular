import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<any> {
    let url = 'https://localhost:7133/Player';
    return this.http.get(url);
  }
  getPlayer(id: any): Observable<any> {
    let url = 'https://localhost:7133/Player/' + id;
    return this.http.get(url);
  }

  addPlayer(player: any): Observable<any> {
    let url = 'https://localhost:7133/Player';
    return this.http.post(url, player);
  }
}
