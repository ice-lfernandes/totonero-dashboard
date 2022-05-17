import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BetTypeRequest } from 'src/app/service/bet-type/model/bet-type-request.model ';
import { BetType } from 'src/app/service/bet-type/model/bet-type.model';
import { Rule } from 'src/app/service/rule/model/rule.model';

@Component({
  selector: 'app-register-score-basic-view',
  templateUrl: './register-score-basic-view.component.html',
  styleUrls: ['./register-score-basic-view.component.css']
})
export class RegisterScoreBasicViewComponent implements OnInit, OnChanges {

  // Constantes
  readonly FAVORITE_TEAM_LOSING_RULE = 'FAVORITE_TEAM_LOSING'
  readonly FAVORITE_TEAM_TYING = 'FAVORITE_TEAM_TYING'
  readonly FAVORITE_TEAM_WINNING_RULE = 'FAVORITE_TEAM_WINNING_RULE'

  @Input() model: BetType
  @Input() requestBetType: BetTypeRequest
  rules: Rule[]

  strategies = [1, 2, 3]
  strategyBallPossession: boolean = false
  strategyAttacks: boolean = false
  strategyDangerousAttacks: boolean = false


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateRules()
  }

  ngOnInit(): void {
    this.updateRules()
  }

  private updateRules() {
    this.rules = this.model.rules.filter(r => r.type == 'ANALYZED')
  }

  chooseStrategy(event: any) {
    console.log(event.target.value)
    if (event.target.value == 1) {
      this.strategyBallPossession = true
      this.strategyAttacks = false
      this.strategyDangerousAttacks = false
    } else if (event.target.value == 2) {
      this.strategyAttacks = true
      this.strategyBallPossession = false
      this.strategyDangerousAttacks = false
    } else {
      this.strategyDangerousAttacks = true
      this.strategyBallPossession = false
      this.strategyAttacks = false
    }
  }

  getRuleByName(nameRule: string): Rule | undefined {
    return this.rules.find(r => r.name == nameRule)
  }
}
