import { Rule } from "../../rule/model/rule.model";

export interface BetType {
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

}