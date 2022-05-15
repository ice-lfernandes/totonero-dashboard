import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { MyBetsViewComponent } from './view/manager-bet-view/my-bets-view/my-bets-view.component';
import { RegisterBetsViewComponent } from './view/manager-bet-view/register-bets-view/register-bets-view.component';
import { RegisterLeagueScoreViewComponent } from './view/register-league-score-view/register-league-score-view.component';
import { RegisterScoreStatsViewComponent } from './view/manager-bet-view/register-score-stats-view/register-score-stats-view.component';
import { RegisterTeamScoreViewComponent } from './view/register-team-score-view/register-team-score-view.component';

const routes: Routes = [
  { path: '', component: DashboardViewComponent },
  { path: 'home', component: DashboardViewComponent },
  { path: 'minhas-bets', component: MyBetsViewComponent },
  { path: 'cadastro-time-score', component: RegisterTeamScoreViewComponent },
  { path: 'cadastro-liga-score', component: RegisterLeagueScoreViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
