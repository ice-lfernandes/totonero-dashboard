import { Component, OnInit } from '@angular/core';

import { faArrowUpFromBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { Role } from 'src/app/service/role/model/role.model';
import { RoleService } from 'src/app/service/role/role.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCircleUser = faCircleUser
  faArrowUpFromBracket = faArrowUpFromBracket

  constructor(public loginService: AuthenticationService, private roleService: RoleService) { }

  ngOnInit(): void {

  }

  logout() {
    this.loginService.logout()
  }

  canUseDashboard(): boolean {
    return this.roleService.canUseByRole(Role.ROLE_DASHBOARD)
  }

  canUseTeamScore(): boolean {
    return this.roleService.canUseByRole(Role.ROLE_TEAM_SCORE)
  }

  canUseLeagueScore(): boolean {
    return this.roleService.canUseByRole(Role.ROLE_LEAGUE_SCORE)
  }

  canUseBackList(): boolean {
    return this.roleService.canUseByRole(Role.ROLE_BLACKLIST)
  }


}
