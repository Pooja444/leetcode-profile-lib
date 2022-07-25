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