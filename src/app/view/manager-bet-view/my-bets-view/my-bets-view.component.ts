import { Component, ComponentRef, Input, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { faEraser, faEye, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { BetTypeService } from 'src/app/service/bet-type/bet-type.service';
import { BetTypeRequest } from 'src/app/service/bet-type/model/bet-type-request.model ';
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
  faEraser = faEraser

  bets: Array<BetType> = []
  betIdSelected!: string
  betSelected: BetType | undefined
  isBetSelected: boolean = false
  isNewBetRequest: boolean = false
  betTypeRequest: BetTypeRequest = new BetTypeRequest()

  constructor(private service: BetTypeService, private ruleService: RuleService) { }

  ngOnInit(): void {
    this.getBets()
  }

  async getBets() {
    this.bets = await this.service.getBets();
  }

  visualizeBetType() {
    this.betSelected = this.bets.find(b => b.id == this.betIdSelected)
    this.isBetSelected = true
    this.isNewBetRequest = false
  }

  cleanBetType() {
    this.betSelected = undefined
    this.isBetSelected = false
    this.isNewBetRequest = false
    this.betIdSelected = '0'
  }

  createBetType() {
    this.cleanBetType()
    this.isNewBetRequest = true
    this.isBetSelected = false
  }

}


