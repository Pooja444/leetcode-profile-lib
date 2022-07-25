import { ErrorResponse } from "../error";

export interface Social {
    githubUrl: string
    twitterUrl: string
    linkedinUrl: string
}

export interface SocialMatchedUer {
    matchedUser: Social
}

export interface SocialResponse {
    isError: boolean
    error?: ErrorResponse
    social: Social
}