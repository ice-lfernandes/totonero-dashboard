export interface Rule {
    id: string
    type: string
    name: string
    value: number
    score: number
    ruleParentId: string
    isMandatory: boolean
    isMandatoryAfterRedCard: boolean
    isUnderdogTeam: boolean
    isEqual: boolean
}