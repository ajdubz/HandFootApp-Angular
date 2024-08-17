import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<any> {
    let url = 'https://localhost:7133/Team';
    return this.http.get(url);
  }
  getTeam(id: any): Observable<any> {
    let url = 'https://localhost:7133/Team/' + id;
    return this.http.get(url);
  }
  addTeam(team: any): Observable<any> {
    let url = 'https://localhost:7133/Team';
    return this.http.post(url, team);
  }
}
