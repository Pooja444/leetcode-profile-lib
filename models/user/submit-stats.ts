export interface AcSubmissionNum {
    difficulty: string
    count: number
    submissions: number
}

export interface ProblemsSolvedBeatsStats {
    difficulty: string
    percentage: number
}

export interface SubmitStats {
    acSubmissionNum: AcSubmissionNum[]
}

export interface SubmitAndProblemStats {
    submitStats: SubmitStats
    problemsSolvedBeatsStats: ProblemsSolvedBeatsStats
}

export interface SubmitStatsMatchedUser {
    matchedUser: SubmitAndProblemStats
}
