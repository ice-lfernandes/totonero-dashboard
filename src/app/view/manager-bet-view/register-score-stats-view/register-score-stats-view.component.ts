import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faCircleInfo, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { BetType } from 'src/app/service/bet-type/model/bet-type.model';
import { Rule } from 'src/app/service/rule/model/rule.model';
import { StatSelected } from './model/stat-selected.model';
import { Stat } from './model/stat.model';


@Component({
  selector: 'app-register-score-stats-view',
  templateUrl: './register-score-stats-view.component.html',
  styleUrls: ['./register-score-stats-view.component.css']
})
export class RegisterScoreStatsViewComponent implements OnInit, OnChanges {

  // Constantes
  readonly FAVORITE_TEAM_LOSING_RULE = 'FAVORITE_TEAM_LOSING'
  readonly FAVORITE_TEAM_TYING = 'FAVORITE_TEAM_TYING'
  readonly FAVORITE_TEAM_WINNING_RULE = 'FAVORITE_TEAM_WINNING_RULE'

  @Input() model: BetType

  // icone
  faCircleInfo = faCircleInfo
  faPlusCircle = faPlusCircle
  faMinusCircle = faMinusCircle

  // infos
  infoSelectBetName = `Bets Cadastras`

  // dados api
  statsAvaiable: Array<Stat> = [
    new Stat(4, 'Chutes no Gol'),
    new Stat(34, 'Chutes para Fora'),
    new Stat(3, 'Chutes'),
    new Stat(37, 'Chutes Bloqueados'),
    new Stat(5, 'Escanteios'),
    new Stat(11, 'Cartão Amarelo'),
    new Stat(12, 'Cartão Vermelho'),
    new Stat(14, 'Posse de Bola %'),
    new Stat(16, 'Defesas Difíceis'),
    new Stat(42, 'Porcentagem de Sucesso nos Passes %'),
    new Stat(43, 'Ataques'),
    new Stat(44, 'Ataques Perigosos')
  ]

  // dados api
  statsSelected: Rule[]

  // campos input


  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.updateRules()
  }

  ngOnInit(): void {
    this.updateRules()
  }

  private updateRules() {
    this.statsSelected = this.model.rules.filter(r => r.type == 'ALERT')
  }

  addRule() {
    // this.statsSelected.push(new StatSelected(new Stat(14, 'Posse de Bola %'), 'Favorito', 70, true, 300))
  }

  removeRule(statSelected: Rule) {
    // this.statsSelected = this.statsSelected.filter(stat => stat !== statSelected)
  }

}
