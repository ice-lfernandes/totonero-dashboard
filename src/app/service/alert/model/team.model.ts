export class Team {
    name!: string;
    score!: number;
    ballPossession: number;
    attacks: number;
    dangerousAttack: number;
    shotOnGoal: number;
    shotOffGoal: number;
    cornerKick: number;
    redCard: number;
    logo: string;

    constructor(name: string, score: number, ballPossession: number, attacks: number, dangerousAttack: number, shotOnGoal: number,
        shotOffGoal: number, cornerKick: number, redCard: number, logo: string) {
        this.name = name;
        this.score = score;
        this.ballPossession = ballPossession;
        this.attacks = attacks;
        this.dangerousAttack = dangerousAttack;
        this.shotOnGoal = shotOnGoal;
        this.shotOffGoal = shotOffGoal;
        this.cornerKick = cornerKick;
        this.redCard = redCard;
        this.logo = logo
    }

}