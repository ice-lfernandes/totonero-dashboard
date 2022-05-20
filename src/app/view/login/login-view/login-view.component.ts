import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  faRightFromBracket = faRightFromBracket

  username: string = ''
  password: string = ''
  invalidLogin: boolean

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  async checkLogin() {
    if (await this.loginservice.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate([''])
    } else
      this.invalidLogin = true
  }

}
