import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Rule } from './model/rule.model';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  private rulesQuery: QueryRef<{ rules: Rule[]; }, { betId: string; }>

  constructor(private apollo: Apollo) {

  }

  async getRulesBet(betId: string): Promise<Rule[]> {
    this.createQueryRef(betId)
    const result = await this.rulesQuery.refetch();
    return result.data.rules;
  }

  private createQueryRef(betId: string) {
    this.rulesQuery = this.apollo.watchQuery({
      query: gql`query($betId: ID!) {
            rules(betId: $betId) {
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
          }`,
      variables: {
        betId: betId
      }
    });
  }
}
