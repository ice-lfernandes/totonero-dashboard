import { Component, OnInit } from '@angular/core';
import { faCircleInfo, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { StatSelected } from './stat-selected.model';
import { Stat } from './stat.model';

@Component({
  selector: 'app-register-score-view',
  templateUrl: './register-score-view.component.html',
  styleUrls: ['./register-score-view.component.css']
})
export class RegisterScoreViewComponent implements OnInit {

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
  statsSelected: Array<StatSelected> = [
    new StatSelected(new Stat(4, 'Chutes no Gol'), 'Favorito', 7, 100),
    new StatSelected(new Stat(3, 'Chutes'), 'Favorito', 10, 200),
    new StatSelected(new Stat(12, 'Cartão Vermelho'), 'Zebra', 1, 200),
    new StatSelected(new Stat(14, 'Posse de Bola %'), 'Favorito', 70, 300)
  ]

  // campos input


  constructor() { }

  ngOnInit(): void {
    
  }

  addRule() {
    this.statsSelected.push(new StatSelected(new Stat(14, 'Posse de Bola %'), 'Favorito', 70, 300))
  }

  removeRule(statSelected: StatSelected) {
    this.statsSelected = this.statsSelected.filter(stat => stat !== statSelected)
  }

}
