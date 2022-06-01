import { Rule } from "../../rule/model/rule.model";

export class BetTypeRequest {
    public name: string | null = null;
    public scoreMinimumEntry: number | null = null;
    public scoreEntry: number | null = null;
    public resultRequired: string | null = null;
    public minimumScore: number | null = null;
    public goodScore: number | null = null;
    public greatScore: number | null = null;
    public enabled: boolean | null = null;
    public periodMatch: string | null = null;
    public minimumDashMinute: number | null = null;
    public maximumDashMinute: number | null = null;
    public maximumAdvantageInResult: number | null = null;
    public templateMessageTelegram: string | null = null;
    public automaticSendTelegram: boolean | null = null;
    public minimumOdd: number | null = null;
    public unit: number | null = null;
    public rules: Rule[] | null = null

    constructor() { }

}