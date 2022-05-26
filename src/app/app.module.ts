import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { FormFilterComponent } from './view/menu/form-filter/form-filter.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardViewComponent } from './view/dashboard-view/dashboard-view.component';
import { TableGamesComponent } from './view/menu/table-games/table-games.component';
import { MenuComponent } from './view/menu/menu.component';
import { RegisterBetsViewComponent } from './view/manager-bet-view/register-bets-view/register-bets-view.component';
import { RegisterScoreStatsViewComponent } from './view/manager-bet-view/register-score-stats-view/register-score-stats-view.component';
import { RegisterTeamScoreViewComponent } from './view/register-team-score-view/register-team-score-view.component';
import { RegisterLeagueScoreViewComponent } from './view/register-league-score-view/register-league-score-view.component';
import { RegisterBlackListViewComponent } from './view/register-black-list-view/register-black-list-view.component';
import { MyBetsViewComponent } from './view/manager-bet-view/my-bets-view/my-bets-view.component';
import { RegisterScoreBasicViewComponent } from './view/manager-bet-view/register-score-basic-view/register-score-basic-view.component';
import { LogoTeamComponent } from './shared/components/logo-team/logo-team.component';
import { LoginViewComponent } from './view/login/login-view/login-view.component';
import { ButtonCardComponent } from './shared/components/button-card/button-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardViewComponent,
    FormFilterComponent,
    TableGamesComponent,
    MenuComponent,
    RegisterBetsViewComponent,
    RegisterScoreStatsViewComponent,
    RegisterTeamScoreViewComponent,
    RegisterLeagueScoreViewComponent,
    RegisterBlackListViewComponent,
    MyBetsViewComponent,
    RegisterScoreBasicViewComponent,
    LogoTeamComponent,
    LoginViewComponent,
    ButtonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    NgbModule,
    ApolloModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'http://localhost:8090/graphql',
        }),
      };
    },
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
