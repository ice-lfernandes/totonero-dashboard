import { Component, ComponentRef, Input, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { faEye, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { BetTypeService } from 'src/app/service/bet-type/bet-type.service';
import { BetType } from 'src/app/service/bet-type/model/bet-type.model';
import { RuleService } from 'src/app/service/rule/rule.service';

@Component({
  selector: 'app-my-bets-view',
  templateUrl: './my-bets-view.component.html',
  styleUrls: ['./my-bets-view.component.css']
})
export class MyBetsViewComponent implements OnInit {

  faPlusCircle = faPlusCircle
  faEye = faEye

  bets: Array<BetType> = []
  betIdSelected!: string 
  betSelected: BetType | undefined
  isBetSelected: boolean = false

  constructor(private service: BetTypeService, private ruleService: RuleService) { }

  ngOnInit(): void {
    this.getBets()
  }

  async getBets() {
    this.bets = await this.service.getBets();
  }

  visualizeBetType() {
    this.betSelected = this.bets.find(b => b.id == this.betIdSelected)
    // this.loadingRulesBet(this.betSelected!)
    this.isBetSelected = true
  }

  // private async loadingRulesBet(bet: BetType) {
  //   const rules = await this.ruleService.getRulesBet(bet.id)
  //   console.log(rules)
  //   bet.maximumAdvantageInResult = 5
  // }

}


