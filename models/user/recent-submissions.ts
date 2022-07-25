export interface RecentSubmissions {
    id: string
    title: string
    titleSlug: string
    timestamp: string
}

export interface RecentSubmissionsAcList {
    recentAcSubmissionList: RecentSubmissions[]
}