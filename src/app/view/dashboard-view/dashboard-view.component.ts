import { Component, OnInit } from '@angular/core';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { DashboardBffService } from 'src/app/service/integration/dashboard/dashboard-bff.service';
import { Match } from '../../service/integration/alert/model/match.model';

const intervalSeconds = 45000

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
  isCollapsed = true;
  faTelegram = faTelegram

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
    this.matchs = result
      .slice()
      .sort((n1, n2) => n2.score - n1.score)
    // .filter(match => match.urlBet365 != null) comentado ate resolver logos

    this.loading = false
  }

  changeCardByScore(match: Match): string {
    if (match.score < match.goodScore) {
      return ''
    } else if (match.score < match.greatScore) {
      return 'card-game-wormming'
    } else {
      return 'card-game-hot'
    }
  }

  changeBadgeByScore(match: Match): string {
    if (match.score >= match.greatScore) {
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

  verifyLinkBetDisabled(url: string): string {
    if (url == '') {
      return 'disabled'
    } else {
      return ''
    }
  }
}


