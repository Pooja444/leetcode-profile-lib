export interface Contributions {
    points: number,
    questionCount: number,
    testcaseCount: number,
}

interface Profile {
    realName: string
    websites: string[]
    countryName: string
    skillTags: string[],
    company: string
    school: string
    starRating: number
    aboutMe: string
    userAvatar: string
    reputation: number
    ranking: number
}

export interface SubmissionNum {
    difficulty: string
    count: number
    submissions: number
}

interface SubmitStats {
    acSubmissionNum: SubmissionNum[]
    totalSubmissionNum: SubmissionNum[]
}

export interface MatchedUser {
    username: string
    socialAccounts: string
    githubUrl: string
    contributions: Contributions[]
    profile: Profile
    submitStats: SubmitStats
}