import { Team } from "./team.model";

export class Match{
    score: number;
    leagueName!: string;
    minutesOfMatch!: string;
    home!: Team;
    away!: Team;
    betName!: string;
    

	constructor(score: number, leagueName: string, minutesOfMatch: string, home: Team, away: Team, betName: string) {
        this.score = score
        this.leagueName = leagueName
        this.minutesOfMatch = minutesOfMatch
        this.home = home
        this.away = away
        this.betName = betName
	}
    
}