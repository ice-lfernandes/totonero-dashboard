import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faCircleInfo, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { BetType } from 'src/app/service/integration/bet-type/model/bet-type.model';
import { BetRule } from 'src/app/service/integration/rule/model/bet-rule.model';

@Component({
  selector: 'app-my-score-stats-view',
  templateUrl: './my-score-stats-view.component.html',
  styleUrls: ['./my-score-stats-view.component.css']
})
export class MyScoreStatsViewComponent implements OnInit, OnChanges {

  @Input() model: BetType

  // icone
  faCircleInfo = faCircleInfo
  faPlusCircle = faPlusCircle
  faMinusCircle = faMinusCircle

  // dados api
  statsSelected: BetRule[] = []


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateRules()
  }

  ngOnInit(): void {
    this.updateRules()
  }

  private updateRules() {
    this.statsSelected = this.model.rules
  }


  removeRule(statSelected: BetRule) {
    this.model.rules = this.model.rules.filter(betRule => betRule !== statSelected)
    this.updateRules()
  }

}
