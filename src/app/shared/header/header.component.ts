import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCircleUser = faCircleUser

  constructor(public loginService: AuthenticationService) { }

  ngOnInit(): void {
    
  }

  logout() {
    this.loginService.logout()
  }

}
