import { Rule } from "../../rule/model/rule.model";

export class BetType {
    id: string;
    name: string;
    scoreMinimumEntry: number;
    scoreEntry: number;
    periodMatch: string;
    minimumDashMinute: number;
    maximumDashMinute: number;
    maximumAdvantageInResult: number;
    templateMessageTelegram: string;
    automaticSendTelegram: boolean;
    minimumOdd: number;
    unit: number;
    rules: Rule[]

    constructor(id: string, name: string, scoreMinimumEntry: number, scoreEntry: number, periodMatch: string,
        minimumDashMinute: number, maximumDashMinute: number, maximumAdvantageInResult: number, templateMessageTelegram: string,
        automaticSendTelegram: boolean, minimumOdd: number, unit: number) {
        this.id = id;
        this.name = name;
        this.scoreMinimumEntry = scoreMinimumEntry;
        this.scoreEntry = scoreEntry;
        this.minimumDashMinute = minimumDashMinute;
        this.maximumDashMinute = maximumDashMinute;
        this.maximumAdvantageInResult = maximumAdvantageInResult;
        this.templateMessageTelegram = templateMessageTelegram;
        this.automaticSendTelegram = automaticSendTelegram;
        this.periodMatch = periodMatch
        this.minimumOdd = minimumOdd
        this.unit = unit
    }
}