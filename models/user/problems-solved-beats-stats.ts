import { ErrorResponse } from "../error";

export interface BeatsStats {
    difficulty: string
    percentage: number
}

export interface ProblemsSolvedBeatsStats {
    problemsSolvedBeatsStats: BeatsStats[]
}

export interface SubmitStatsMatchedUser {
    matchedUser: ProblemsSolvedBeatsStats
}

export interface SubmitStatsResponse {
    isError: boolean
    error?: ErrorResponse
    problemsSolvedBeatsStats: BeatsStats[]
}