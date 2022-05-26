import { Component, Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Role } from './model/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private loginService: AuthenticationService) { }

  canUseByRole(role: Role): boolean {
    if (this.loginService.user?.roles.includes(role.toString())) {
      return true
    } else {
      return false
    }
  }
}
