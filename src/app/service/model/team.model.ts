export class Team {
    name!: string;
    score!: number;
    ballPossession: number;
    shotOnGoal: number;
    shotOffGoal: number;
    cornerKick: number;
    redCard: number;
    logo: string;

    constructor(name: string, score: number, ballPossession: number, shotOnGoal: number,
        shotOffGoal: number, cornerKick: number, redCard: number, logo: string) {
        this.name = name;
        this.score = score;
        this.ballPossession = ballPossession;
        this.shotOnGoal = shotOnGoal;
        this.shotOffGoal = shotOffGoal;
        this.cornerKick = cornerKick;
        this.redCard = redCard;
        this.logo = logo
    }

}