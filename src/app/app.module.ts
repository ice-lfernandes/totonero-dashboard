import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
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
import { RegisterBetsViewComponent } from './view/register-bets-view/register-bets-view.component';
import { RegisterScoreViewComponent } from './view/register-score-view/register-score-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardViewComponent,
    FormFilterComponent,
    TableGamesComponent,
    MenuComponent,
    RegisterBetsViewComponent,
    RegisterScoreViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
          uri: 'http://totonero-dashbord-service.us-east-1.elasticbeanstalk.com/graphql',
        }),
      };
    },
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
