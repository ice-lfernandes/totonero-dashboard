import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Match } from '../alert/model/match.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardBffService {

  private matchesQuery: QueryRef<{ matches: Match[]; }, { token: string; }>;

  constructor(private apollo: Apollo) {
    this.matchesQuery = this.apollo.watchQuery({
      query: gql`query($token: String!) {
          matches(token: $token) {
            score
            minimumScore
            goodScore
            greatScore
            matchId
            leagueName
            minutesOfMatch
            betName
            urlBet365
            home {
              name
              logo
              score
              shotOnGoal
              attacks
              dangerousAttack
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
              attacks
              dangerousAttack
              ballPossession
              shotOffGoal
              redCard
              cornerKick
            }
          }
        }`,
      variables: {
        token: sessionStorage.getItem('token')!
      }
    });
  }

  async getMatches(): Promise<Match[]> {
    const result = await this.matchesQuery.refetch();
    return result.data.matches;
  }
}
