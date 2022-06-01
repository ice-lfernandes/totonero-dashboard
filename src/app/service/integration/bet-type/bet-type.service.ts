import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BetType } from './model/bet-type.model';

@Injectable({
  providedIn: 'root'
})
export class BetTypeService {

  url = 'http://localhost:8080/bet'

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
    })
  }

  constructor(private http: HttpClient) { }

  getBets(): Observable<BetType[]> {
    return this.http.get<BetType[]>(this.url, this.httpOptions).pipe()
  }
}
