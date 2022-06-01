import { BetRule } from "../../rule/model/bet-rule.model";

export class BetType {
    id: string;
    name: string;
    minimumScore: number;
    goodScore: number;
    greatScore: number;
    periodMatch: string
    resultRequired: string;
    enabled: boolean;
    corner: boolean;
    equal: boolean;
    minimumDashMinute: number;
    maximumDashMinute: number;
    maximumDifferenceInResult: number;
    templateMessageTelegram: string;
    automaticSendTelegram: boolean;
    rules: BetRule[]

}