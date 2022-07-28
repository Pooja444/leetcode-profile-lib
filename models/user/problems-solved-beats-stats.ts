import { ErrorResponse } from "../error";

export interface BeatsStats {
    difficulty: string
    percentage: number
}

export interface ProblemsSolvedBeatsStats {
    problemsSolvedBeatsStats: BeatsStats[]
}

export interface ProblemsSolvedBeatsStatsMatchedUser {
    matchedUser: ProblemsSolvedBeatsStats
}

export interface ProblemsSolvedBeatsStatsResponse {
    isError: boolean
    error?: ErrorResponse
    problemsSolvedBeatsStats: BeatsStats[]
}