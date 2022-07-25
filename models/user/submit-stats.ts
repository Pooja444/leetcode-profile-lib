import { ErrorResponse } from "../error";

export interface SubmissionNum {
    difficulty: string
    count: number
    submissions: number
}

export interface AcSubmissionNum {
    acSubmissionNum: SubmissionNum[]
}

export interface SubmitStats {
    submitStats: AcSubmissionNum
}

export interface SubmitStatsMatchedUser {
    matchedUser: SubmitStats
}

export interface SubmitStatsResponse {
    isError: boolean
    error?: ErrorResponse
    submitStats: AcSubmissionNum
}