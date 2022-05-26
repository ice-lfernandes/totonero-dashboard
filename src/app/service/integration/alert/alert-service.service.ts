import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatchAlive } from './match-alive.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  url = 'http://totonero-alert-service.us-east-1.elasticbeanstalk.com/dash/all-matchs'
  
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getMatchesAlive(): Observable<MatchAlive[]> {
    return this.http.get<MatchAlive[]>(this.url).pipe()
  }
}
