import { ErrorResponse } from "../error";

export interface ContestBadge {
    name: string
}

export interface ContestRanking {
    attendedContestsCount: number
    rating: number
    globalRanking: number
    totalParticipants: number
    topPercentage: number
    badge: ContestBadge
}

export interface UserContestRanking {
    userContestRanking: ContestRanking
}

export interface ContestRankingHistoryResponse {
    isError: boolean
    error?: ErrorResponse
    contestRanking: ContestRanking
}