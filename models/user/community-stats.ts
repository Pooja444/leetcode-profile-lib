export interface CommunityStats {
    reputation: number
    reputationDiff: number
    postViewCount: number
    postViewCountDiff: number
    solutionCount: number
    solutionCountDiff: number
    categoryDiscussCount: number
    categoryDiscussCountDiff: number
}

export interface CommunityStatsMatchedUser {
    matchedUser: CommunityStatsProfile
}

export interface CommunityStatsProfile {
    profile: CommunityStats
}