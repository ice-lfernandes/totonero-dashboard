import { Team } from "./team.model";

export class Match{
    score!: number;
    leagueName!: string;
    minuteMatch!: string;
    homeTeam!: Team;
    awayTeam!: Team;
    

	constructor(score: number, leagueName: string, minuteMatch: string, homeTeam: Team, awayTeam: Team) {
        this.score = score
        this.leagueName = leagueName
        this.minuteMatch = minuteMatch
        this.homeTeam = homeTeam
        this.awayTeam = awayTeam
	}
    
}