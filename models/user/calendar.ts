import { ErrorResponse } from "../error";

export interface DccBadgeDetail {
    name: string
    icon: string
}

export interface DccBadge {
    timestamp: string
    badge: DccBadgeDetail
}

export interface Calendar {
    activeYears: number[]
    streak: number
    totalActiveDays: number,
    dccBadges: DccBadge[],
    submissionCalendar: string
}

export interface UserCalendar {
    userCalendar: Calendar
}

export interface CalendarMatchedUser {
    matchedUser: UserCalendar
}

export interface CalendarResponse {
    isError: boolean
    error?: ErrorResponse
    calendar: Calendar
}