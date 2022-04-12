import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Match } from './model/match.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardBffService {

  private matchesQuery: QueryRef<{ matchesLocal: Match[] }>;

  constructor(private apollo: Apollo) {
    this.matchesQuery = this.apollo.watchQuery({
      query: gql`query {
            matchesLocal {
              score
              matchId
              leagueName
              minutesOfMatch
              betName
              home {
                name
                logo
                score
                shotOnGoal
                ballPossession
                shotOffGoal
                redCard
                cornerKick
              }
              away {
                name
                logo
                score
                shotOnGoal
                ballPossession
                shotOffGoal
                redCard
                cornerKick
              }
            }
          }`
    });
  }

  async getMatches(): Promise<Match[]> {
    const result = await this.matchesQuery.refetch();
    return result.data.matchesLocal;
  }
}
