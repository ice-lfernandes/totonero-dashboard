import { Component, Input, OnInit } from '@angular/core';
import { faCircleInfo, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { BetType } from 'src/app/service/integration/bet-type/model/bet-type.model';
import { BetRule } from 'src/app/service/integration/rule/model/bet-rule.model';
import { Rule } from 'src/app/service/integration/rule/model/rule.model';
import { RuleService } from 'src/app/service/integration/rule/rule.service';
import { BetRuleRequest } from './model/bet-rule-request.model';

@Component({
  selector: 'app-register-score-stats-view',
  templateUrl: './register-score-stats-view.component.html',
  styleUrls: ['./register-score-stats-view.component.css']
})
export class RegisterScoreStatsViewComponent implements OnInit {


  @Input() model: BetType

  // infos
  infoSelectBetName = `Bets Cadastras`

  // icone
  faCircleInfo = faCircleInfo
  faPlusCircle = faPlusCircle
  faMinusCircle = faMinusCircle

  ruleAvailables: Rule[] = []
  teamTypeAvailable: string[] = ['FAVORITE', 'UNDERDOG', 'BOTH']
  comparatorAvailable: string[] = ['MORE', 'LESS', 'EQUAL']

  newBetRule: BetRuleRequest = new BetRuleRequest()

  constructor(private ruleService: RuleService) { }

  ngOnInit(): void {
    this.loadRulesAvailable()
  }

  async loadRulesAvailable() {
    this.ruleService.getRuleAvailable().subscribe((data: Rule[]) => this.ruleAvailables = data)
  }

  enableAddRule(): boolean {
    return this.newBetRule.rule != null && this.newBetRule.comparator != null
      && this.newBetRule.mandatory != null && this.newBetRule.score != null
      && this.newBetRule.value != null && this.newBetRule.teamType != null
  }


  addRule() {
    this.model.rules.push(
      {
        id: null!,
        parentId: null!,
        mandatoryAfterRedCard: false,
        minute: null!,
        rule: this.newBetRule.rule!,
        score: this.newBetRule.score!,
        value: this.newBetRule.value!,
        mandatory: this.newBetRule.mandatory!,
        teamType: this.newBetRule.teamType!,
        comparator: this.newBetRule.comparator!
      })
  }


}