import { Component, OnInit } from '@angular/core';

import { faArrowUpFromBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCircleUser = faCircleUser
  faArrowUpFromBracket = faArrowUpFromBracket

  constructor(public loginService: AuthenticationService) { }

  ngOnInit(): void {
    
  }

  logout() {
    this.loginService.logout()
  }

}
