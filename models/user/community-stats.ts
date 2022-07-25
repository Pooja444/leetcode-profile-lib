import { ErrorResponse } from "../error";

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

export interface CommunityStatsProfile {
    profile: CommunityStats
}

export interface CommunityStatsMatchedUser {
    matchedUser: CommunityStatsProfile
}

export interface CommunityStatsResponse {
    isError: boolean
    error?: ErrorResponse
    communityStats: CommunityStats
}