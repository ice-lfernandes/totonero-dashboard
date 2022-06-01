import { Rule } from "src/app/service/integration/rule/model/rule.model";

export class BetRuleRequest {
    public rule: Rule | null = null
    public value: number | null = null
    public score: number | null = null
    public mandatory: boolean | null = null
    public mandatoryAfterRedCard: boolean | null = null
    public comparator: string | null = null
    public teamType: string | null = null
}