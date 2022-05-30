import { Comparator } from "../../bet-type/model/comparator.model"
import { TeamType } from "../../bet-type/model/team-type.model"

export interface Rule {
    id: string
    type: string
    name: string
    value: number
    score: number
    ruleParentId: string
    mandatory: boolean
    mandatoryAfterRedCard: boolean
    equal: boolean
    comparator: Comparator
    teamType: TeamType
}