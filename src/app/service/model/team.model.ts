export class Team {
    name!: string;
    score!: number;
    ballPossession: number;
    shotOnGoal: number;
    shotOffGoal: number;
    cornerKick: number;
    redCard: number;

    constructor(name: string, score: number, ballPossession: number, shotOnGoal: number,
        shotOffGoal: number, cornerKick: number, redCard: number) {
        this.name = name;
        this.score = score;
        this.ballPossession = ballPossession;
        this.shotOnGoal = shotOnGoal;
        this.shotOffGoal = shotOffGoal;
        this.cornerKick = cornerKick;
        this.redCard = redCard;
    }

}