import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BetTypeRequest } from './model/bet-type-request.model ';
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
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    })
  }

  constructor(private http: HttpClient) { }

  getBets(): Observable<BetType[]> {
    return this.http.get<BetType[]>(this.url, this.httpOptions).pipe()
  }

  updateBet(betType: BetType): Observable<BetType> {
    return this.http.put<BetType>(this.url + "/" + betType.id, this.convertToBetRequest(betType), this.httpOptions).pipe()
  }

  createBet(betType: BetTypeRequest): Observable<BetType> {
    return this.http.post<BetType>(this.url, betType, this.httpOptions).pipe()
  }

  private convertToBetRequest(betType: BetType): BetTypeRequest {
    let request = new BetTypeRequest()

    request.name = betType.name
    request.corner = betType.corner
    request.enabled = betType.enabled
    request.periodMatch = betType.periodMatch
    request.minimumScore = betType.minimumScore
    request.goodScore = betType.goodScore
    request.greatScore = betType.greatScore
    request.minimumDashMinute = betType.minimumDashMinute
    request.maximumDashMinute = betType.maximumDashMinute
    request.maximumDifferenceInResult = betType.maximumDifferenceInResult
    request.rules = betType.rules
    request.resultRequired = betType.resultRequired

    return request;
  }
}
