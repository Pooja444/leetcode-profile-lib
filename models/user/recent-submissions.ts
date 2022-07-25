import { ErrorResponse } from "../error";

export interface RecentSubmissions {
    id: string
    title: string
    titleSlug: string
    timestamp: string
}

export interface RecentSubmissionsAcList {
    recentAcSubmissionList: RecentSubmissions[]
}

export interface RecentSubmissionsResponse {
    isError: boolean
    error?: ErrorResponse
    recentSubmissions: RecentSubmissions[]
}