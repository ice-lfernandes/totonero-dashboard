import { Component, OnInit } from '@angular/core';
import { DashboardBffService } from 'src/app/service/dashboard-bff.service';
import { Match } from '../../service/model/match.model';

const intervalSeconds = 30000

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  matchs: Array<Match> = []
  noGamesAvaiable: boolean = false
  loading: boolean = true
  interval: any


  constructor(private service: DashboardBffService) { }

  ngOnInit(): void {
    this.updateMatches()
    this.interval = setInterval(() => {
      this.updateMatches();
    }, intervalSeconds);
  }

  async updateMatches() {
    this.loading = true

    const result: Array<Match> = await this.service.getMatches();
    if (!result.length) {
      this.noGamesAvaiable = true
    } else {
      this.noGamesAvaiable = false
    }
    this.matchs = result.slice().sort((n1, n2) => n2.score - n1.score)

    this.loading = false
  }

  changeCardByScore(score: number): string {
    if (score < 850) {
      return ''
    } else if (score < 1000) {
      return 'card-game-wormming'
    } else {
      return 'card-game-hot'
    }
  }

  changeBadgeByScore(score: number): string {
    if (score > 1000) {
      return 'bg-success'
    } else {
      return 'bg-secondary'
    }
  }

  verifyPeriodoMatch(minutes: string): string {
    if (Number(minutes) < 45) {
      return '1T'
    } else {
      return '2T'
    }
  }


}


