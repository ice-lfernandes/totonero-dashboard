import { Component, OnInit } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-team-score-view',
  templateUrl: './register-team-score-view.component.html',
  styleUrls: ['./register-team-score-view.component.css']
})
export class RegisterTeamScoreViewComponent implements OnInit {

  faCircleInfo = faCircleInfo

  constructor() { }

  ngOnInit(): void {
  }

}
