import { Rule } from "./rule.model"

export interface BetRule {
    id: string
    parentId: string
    rule: Rule
    value: number
    score: number
    minute: number
    mandatory: boolean
    mandatoryAfterRedCard: boolean
    comparator: string
    teamType: string
}