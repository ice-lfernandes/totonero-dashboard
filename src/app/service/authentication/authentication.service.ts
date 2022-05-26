import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationClientService } from './authentication-client.service';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User | undefined

  constructor(private router: Router, private authenticationClient: AuthenticationClientService) { }

  async authenticate(username: string, password: string) {
    try {
      this.user = await this.authenticationClient.authenticate(username, password)

      if (this.user === null) return false

      sessionStorage.setItem('token', this.user!.token)
      console.log(this.user)
      sessionStorage.setItem('username', this.user!.username)
      return true;
    } catch (error) {
      return false
    }
  }

  logout() {
    sessionStorage.clear()
    this.user = undefined
    this.router.navigate(['login'])
  }

  isUserLoggedIn() {
    let token = sessionStorage.getItem('token')
    return !(token === null)
  }
}
