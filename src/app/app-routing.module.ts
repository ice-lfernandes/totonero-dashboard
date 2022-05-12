import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { MyBetsViewComponent } from './view/my-bets-view/my-bets-view.component';
import { RegisterBetsViewComponent } from './view/register-bets-view/register-bets-view.component';
import { RegisterLeagueScoreViewComponent } from './view/register-league-score-view/register-league-score-view.component';
import { RegisterScoreViewComponent } from './view/register-score-view/register-score-view.component';
import { RegisterTeamScoreViewComponent } from './view/register-team-score-view/register-team-score-view.component';

const routes: Routes = [
  { path: '', component: DashboardViewComponent },
  { path: 'home', component: DashboardViewComponent },
  { path: 'minhas-bets', component: MyBetsViewComponent },
  { path: 'cadastro-bets', component: RegisterBetsViewComponent },
  { path: 'cadastro-score', component: RegisterScoreViewComponent },
  { path: 'cadastro-time-score', component: RegisterTeamScoreViewComponent },
  { path: 'cadastro-liga-score', component: RegisterLeagueScoreViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
