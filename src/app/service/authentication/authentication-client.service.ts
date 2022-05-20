import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestDTO } from './model/login-request-dto.model';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationClientService {

  url = 'http://localhost:8080/auth'
  errorMsg: string

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Promise<User | undefined> {
    return this.http
      .post<User>(this.url, new LoginRequestDTO(username, password), this.httpOptions)
      .toPromise()
  }

}
