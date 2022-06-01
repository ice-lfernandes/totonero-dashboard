import { RuleType } from "./rule-type.model";

export interface Rule {
    id: string;
    parentId: string
    type: RuleType
    name: string
}