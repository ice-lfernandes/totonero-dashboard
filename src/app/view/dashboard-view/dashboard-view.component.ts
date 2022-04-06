import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/model/match.model';
import { Team } from 'src/app/model/team.model';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  matchs: Array<Match> = []
  clazz: String = `card text-center shadow p-3 mb-5 rounded card-presentation-game border-secondary `


  constructor() { }


  changeCardByScore(score: number): string {
    if (score < 900) {
      return ''
    } else if (score < 1000) {
      return 'card-game-wormming'
    } else {
      return 'card-game-hot'
    }
  }

  ngOnInit(): void {
    this.matchs.push(new Match(
      1200,
      "Campeonato Brasileiro",
      "37:30",
      new Team("Flamengo", 1, 65, 4, 7, 9, 0),
      new Team("Vasco", 0, 35, 2, 4, 2, 1)
    ), new Match(
      1100,
      "Campeonato Argentino",
      "37:30",
      new Team("River Plate", 1, 65, 4, 7, 9, 0),
      new Team("Boca Juniors", 0, 35, 2, 4, 2, 1)
    ), new Match(
      950,
      "Campeonato Espanhol",
      "37:30",
      new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
      new Team("Barcelona", 0, 35, 2, 4, 2, 1)
    ),
      new Match(
        700,
        "Campeonato Espanhol",
        "37:30",
        new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
        new Team("Barcelona", 0, 35, 2, 4, 2, 1)
      ),
      new Match(
        700,
        "Campeonato Espanhol",
        "37:30",
        new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
        new Team("Barcelona", 0, 35, 2, 4, 2, 1)
      ),
      new Match(
        700,
        "Campeonato Espanhol",
        "37:30",
        new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
        new Team("Barcelona", 0, 35, 2, 4, 2, 1)
      ),
      new Match(
        700,
        "Campeonato Espanhol",
        "37:30",
        new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
        new Team("Barcelona", 0, 35, 2, 4, 2, 1)
      ),
      new Match(
        700,
        "Campeonato Espanhol",
        "37:30",
        new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
        new Team("Barcelona", 0, 35, 2, 4, 2, 1)
      ),
      new Match(
        700,
        "Campeonato Espanhol",
        "37:30",
        new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
        new Team("Barcelona", 0, 35, 2, 4, 2, 1)
      ),
      new Match(
        700,
        "Campeonato Espanhol",
        "37:30",
        new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
        new Team("Barcelona", 0, 35, 2, 4, 2, 1)
      ),
      new Match(
        700,
        "Campeonato Espanhol",
        "37:30",
        new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
        new Team("Barcelona", 0, 35, 2, 4, 2, 1)
      ),
      new Match(
        700,
        "Campeonato Espanhol",
        "37:30",
        new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
        new Team("Barcelona", 0, 35, 2, 4, 2, 1)
      ),
      new Match(
        700,
        "Campeonato Espanhol",
        "37:30",
        new Team("Real Madrid", 1, 65, 4, 7, 9, 0),
        new Team("Barcelona", 0, 35, 2, 4, 2, 1)
      )
    )
  }

}
