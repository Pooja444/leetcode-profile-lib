import { getUserProfileQuery } from "../graphql/user/profile.graphql"
import { getAllQuestionsCountQuery } from "../graphql/problems/total.graphql"
import { AllQuestionsCount } from "../models-old/allQuestionsCount"
import { MatchedUser } from "../models-old/matchedUser"
import { apolloClient } from "./apollo.service"
import { BadgeResponse, BadgesMatchedUser } from "../models/user/badges"
import { ErrorResponse } from "../models/error"
import { getUserBadgesQuery } from "../graphql/user/badges.graphql"

function getInvalidUsernameErrorResponse(username: string): ErrorResponse {
    let errorResponse: ErrorResponse
    if (!username.match(/^[0-9A-Za-z]+$/)) {
        errorResponse = {
            errorCode: 400,
            errorMessage: `Invalid username ${username}. Username can only contain digits or alphabets`
        }
        return errorResponse
    }
    return null
}

export class LeetProfileService {
    static async getUserBadges(username: string): Promise<BadgeResponse> {
        const invalidUsernameResponse = getInvalidUsernameErrorResponse(username)
        if (invalidUsernameResponse !== null) {
            return {
                isError: true,
                error: invalidUsernameResponse,
                badgeTypes: null
            }
        }
        let badgeResponse: BadgeResponse
        const response: { data: BadgesMatchedUser } = await apolloClient.query<BadgesMatchedUser>({
            query: getUserBadgesQuery(),
            variables: { "username": username }
        }).catch(err => {
            badgeResponse = {
                isError: true,
                error: {
                    errorCode: 500,
                    errorMessage: `An error occurred while retrieving user badges - ${err}. Please inform the developer.`
                },
                badgeTypes: null
            }
            return null
        })
        if (badgeResponse === undefined) {
            badgeResponse = {
                isError: false,
                error: null,
                badgeTypes: response.data.matchedUser
            }
        }
        return badgeResponse
    }

    static async getAllQuestionsCount(): Promise<AllQuestionsCount> {
        const response = await apolloClient.query<AllQuestionsCount>({
            query: getAllQuestionsCountQuery()
        })
        return response.data
    }

    static async getUserProfile(username: string): Promise<MatchedUser> {
        const response = await apolloClient.query<MatchedUser>({
            query: getUserProfileQuery(),
            variables: { "username": username }
        })
            .catch(err => {
                return err
            })
        return response.data
    }

}