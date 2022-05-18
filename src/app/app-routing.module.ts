import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { MyBetsViewComponent } from './view/manager-bet-view/my-bets-view/my-bets-view.component';
import { RegisterLeagueScoreViewComponent } from './view/register-league-score-view/register-league-score-view.component';
import { RegisterTeamScoreViewComponent } from './view/register-team-score-view/register-team-score-view.component';
import { LoginViewComponent } from './view/login/login-view/login-view.component';
import { AuthGaurdService } from './service/auth/auth-gaurd.service';

const routes: Routes = [
  { path: '', component: DashboardViewComponent, canActivate: [AuthGaurdService] },
  { path: 'home', component: DashboardViewComponent, canActivate: [AuthGaurdService] },
  { path: 'minhas-bets', component: MyBetsViewComponent, canActivate: [AuthGaurdService] },
  { path: 'cadastro-time-score', component: RegisterTeamScoreViewComponent, canActivate: [AuthGaurdService] },
  { path: 'cadastro-liga-score', component: RegisterLeagueScoreViewComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
