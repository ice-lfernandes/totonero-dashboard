import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { BetType } from './model/bet-type.model';

@Injectable({
  providedIn: 'root'
})
export class BetTypeService {

  private betsQuery: QueryRef<{ bets: BetType[] }>

  constructor(private apollo: Apollo) {
    this.betsQuery = this.apollo.watchQuery({
      query: gql`query {
            bets {
              id
              name
              scoreEntry
              scoreMinimumEntry
              minimumDashMinute
              maximumDashMinute
              maximumAdvantageInResult
              periodMatch
              templateMessageTelegram
              automaticSendTelegram
              minimumOdd
              unit
              rules {
                id
                type
                name
                value
                score
                isEqual
                isMandatory
                isUnderdogTeam
                isMandatoryAfterRedCard
              }
            }
          }`
    });
  }

  async getBets(): Promise<BetType[]> {
    const result = await this.betsQuery.refetch();
    return result.data.bets;
  }
}
