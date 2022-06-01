import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BetType } from '../bet-type/model/bet-type.model';
import { Rule } from './model/rule.model';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  url = 'http://localhost:8080/rule'

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization' : 'Bearer ' + sessionStorage.getItem('token')
    })
  }

  constructor(private http: HttpClient) { }

  getRuleAvailable(): Observable<Rule[]> {
    return this.http.get<Rule[]>(this.url, this.httpOptions).pipe()
  }

}
