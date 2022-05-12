import { Team } from "./team.model";

export class Match{
    score: number;
    leagueName!: string;
    minutesOfMatch!: string;
    home!: Team;
    away!: Team;
    betName!: string;
    urlBet365: string;

	constructor(score: number, leagueName: string, minutesOfMatch: string, home: Team, away: Team, betName: string, urlBet365: string) {
        this.score = score
        this.leagueName = leagueName
        this.minutesOfMatch = minutesOfMatch
        this.home = home
        this.away = away
        this.betName = betName
        this.urlBet365 = urlBet365
	}
    
}