import { Team } from "./team.model";

export class Match {
    score: number;
    minimunScore: number;
    goodScore: number;
    greatScore: number;
    leagueName!: string;
    minutesOfMatch!: string;
    home!: Team;
    away!: Team;
    betName!: string;
    urlBet365: string;

    constructor(score: number, leagueName: string, minutesOfMatch: string, home: Team, away: Team, betName: string, urlBet365: string,
        minimunScore: number, goodScore: number, greatScore: number) {
        this.score = score
        this.minimunScore = minimunScore
        this.goodScore = goodScore
        this.greatScore = greatScore
        this.leagueName = leagueName
        this.minutesOfMatch = minutesOfMatch
        this.home = home
        this.away = away
        this.betName = betName
        this.urlBet365 = urlBet365
    }

}