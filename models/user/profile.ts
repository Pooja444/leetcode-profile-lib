import { ErrorResponse } from "../error";

export interface Profile {
    realName: string
    websites: string[]
    countryName: string
    skillTags: string[]
    company: string
    school: string
    starRating: number
    aboutMe: string
    userAvatar: string
    ranking: number
}

export interface UserProfile {
    profile: Profile
}

export interface ProfileMatchedUser {
    matchedUser: UserProfile
}

export interface ProfileResponse {
    isError: boolean
    error?: ErrorResponse
    profile: Profile
}