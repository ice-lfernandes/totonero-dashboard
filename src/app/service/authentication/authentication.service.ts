import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  authenticate(username: string, password: string) {
    if (username === "totonero" && password === "totonero") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(['login'])
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }
}
