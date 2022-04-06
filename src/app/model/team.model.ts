export class Team {
    name!: string;
    score!: number;
    ballPossession!: number;
    shotsOnTarget!: number;
    shotsOffTarget!: number;
    cornerKick!: number;
    redCard!: number;

    constructor(name: string, score: number, ballPossession: number, shotsOnTarget: number,
        shotsOffTarget: number, cornerKick: number, redCard: number) {
        this.name = name;
        this.score = score;
        this.ballPossession = ballPossession;
        this.shotsOnTarget = shotsOnTarget;
        this.shotsOffTarget = shotsOffTarget;
        this.cornerKick = cornerKick;
        this.redCard = redCard;
    }
}