import { BetRule } from "../../rule/model/bet-rule.model";
import { Rule } from "../../rule/model/rule.model";

export class BetTypeRequest {
    public name: string | null = null;
    public periodMatch: string | null = null;
    public enabled: boolean | null = null;
    public equal: boolean | null = null;
    public corner: boolean | null = null;
    public minimumScore: number | null = null;
    public goodScore: number | null = null;
    public greatScore: number | null = null;
    public minimumDashMinute: number | null = null;
    public maximumDashMinute: number | null = null;
    public maximumDifferenceInResult: number | null = null;
    public resultRequired: string | null = null
    public rules: BetRule[] | null = null

    constructor() { }

}