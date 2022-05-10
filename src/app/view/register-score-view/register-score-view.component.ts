import { Component, OnInit } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-score-view',
  templateUrl: './register-score-view.component.html',
  styleUrls: ['./register-score-view.component.css']
})
export class RegisterScoreViewComponent implements OnInit {

  faCircleInfo = faCircleInfo
  infoSelectBetName = `Bets Cadastras`

  constructor() { }

  ngOnInit(): void {
  }

}
