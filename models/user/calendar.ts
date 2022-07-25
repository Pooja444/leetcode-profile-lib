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

export interface CalendarMatchedUser {
    matchedUser: UserCalendar
}

export interface UserCalendar {
    userCalendar: Calendar
}