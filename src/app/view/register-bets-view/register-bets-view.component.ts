import { Component, OnInit } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-bets-view',
  templateUrl: './register-bets-view.component.html',
  styleUrls: ['./register-bets-view.component.css']
})
export class RegisterBetsViewComponent implements OnInit {

  faCircleInfo = faCircleInfo
  infoInputbetName = `Nome da Aposta a ser criada`
  infoInputScoreMinimum = `Valor de Score mínimo que indica que o jogo está perto de realizar entrada`
  infoInputScoreMaximun = `Valor de Score que indica que o jogo está dentro do método para realizar entrada`
  infoInputMatchPeriod = `Tempo de Jogo da aposta: 1°T ou 2°T`
  infoInputMinimumMinuteAnalysis = `Tempo da Partida aonde começará ser analisado o jogo para realizar cálculo do score baseado no padrão definido`
  infoInputMinimumMaximunAnalysis = `Tempo da Partida em que o padrão da entrada entende que aposta não deve ser mais analisada`
  infoInputQuantityMaximunOfGoals = `Quantidade de gols máxima de desvantagem do favorito para jogo ser analisado`
  infoInputTemplateMessageTelegram = `Template de mensagem a ser enviada para tip do Telegram`
  infocheckAutomaticaSendMessage = `Habilita envio automático de tip quando jogo atinge score de entrada`

  constructor() { }

  ngOnInit(): void {
  }

}
