import { Component, OnInit } from '@angular/core';
import { DashboardBffService } from 'src/app/service/dashboard-bff.service';
import { Match } from '../../service/model/match.model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  matchs: Array<Match> = []
  clazz: String = `card text-center shadow p-3 mb-5 rounded card-presentation-game border-secondary `


  constructor(private service: DashboardBffService) { }

  ngOnInit(): void {
    this.updateMatches()
  }


  async updateMatches() {
    const result: Array<Match> = await this.service.getMatches();
    this.matchs = result
  }

  changeCardByScore(score: number): string {
    if (score < 900) {
      return ''
    } else if (score < 1000) {
      return 'card-game-wormming'
    } else {
      return 'card-game-hot'
    }
  }

  
}


