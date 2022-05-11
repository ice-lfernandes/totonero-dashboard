import { Stat } from "./stat.model"

export class StatSelected {
    stat: Stat;
    team: string;
    value: number;
    score: number;

    constructor(stat: Stat, team: string, value: number, score: number) {
        this.stat = stat;
        this.team = team;
        this.value = value;
        this.score = score;
    }
}