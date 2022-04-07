import { Team } from "./team.model";

export class Match{
    score: number;
    leagueName!: string;
    minutesOfMatch!: string;
    home!: Team;
    away!: Team;
    

	constructor(score: number, leagueName: string, minutesOfMatch: string, home: Team, away: Team) {
        this.score = score
        this.leagueName = leagueName
        this.minutesOfMatch = minutesOfMatch
        this.home = home
        this.away = away
	}
    
}