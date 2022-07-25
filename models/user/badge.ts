export interface MedalConfig {
    iconGif: string
    iconGifBackground: string
}

export interface Medal {
    slug: string
    config: MedalConfig
}

export interface Badge {
    id: string
    name: string
    shortName: string
    displayName: string
    icon: string
    hoverText: string
    medal: Medal
    creationDate: string
    category: string
}

export interface UpcomingBadge {
    name: string
    icon: string
    progress: number
}

export interface BadgesMatchedUser {
    matchedUser: Badges
}

export interface Badges {
    badges: Badge[]
    upcomingBadges: UpcomingBadge[]
}