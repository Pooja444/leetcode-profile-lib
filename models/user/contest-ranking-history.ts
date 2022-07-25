export interface Contest {
    title: string
    startTime: number
}

export interface ContestRankingHistory {
    attended: boolean
    trendDirection: string
    problemsSolved: number
    totalProblems: number
    finishTimeInSeconds: number
    rating: number
    ranking: number
    contest: Contest
}

export interface UserContestRankingHistory {
    userContestRankingHistory: ContestRankingHistory[]
}