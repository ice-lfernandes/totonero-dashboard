import { BetRule } from "../../rule/model/bet-rule.model";

export class BetType {
    id: string;
    name: string;
    nameSimple: string;
    minimumScore: number;
    goodScore: number;
    greatScore: number;
    periodMatch: string;
    firstHalf: boolean;
    resultRequired: string;
    enabled: boolean;
    corner: boolean;
    equal: boolean;
    minimumDashMinute: number;
    maximumDashMinute: number;
    maximumAdvantageInResult: number;
    templateMessageTelegram: string;
    automaticSendTelegram: boolean;
    rules: BetRule[]

}