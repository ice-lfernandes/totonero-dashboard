import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { RegisterBetsViewComponent } from './view/register-bets-view/register-bets-view.component';
import { RegisterScoreViewComponent } from './view/register-score-view/register-score-view.component';

const routes: Routes = [
  { path: '', component: DashboardViewComponent },
  { path: 'home', component: DashboardViewComponent },
  { path: 'cadastro-bets', component: RegisterBetsViewComponent },
  { path: 'cadastro-score', component: RegisterScoreViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
