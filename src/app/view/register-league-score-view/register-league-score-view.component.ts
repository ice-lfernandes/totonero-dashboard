import { Component, OnInit } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-league-score-view',
  templateUrl: './register-league-score-view.component.html',
  styleUrls: ['./register-league-score-view.component.css']
})
export class RegisterLeagueScoreViewComponent implements OnInit {

  faCircleInfo = faCircleInfo

  constructor() { }

  ngOnInit(): void {
  }

}
