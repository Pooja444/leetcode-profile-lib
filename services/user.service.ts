import { apolloClient } from "./apollo.service"
import { BadgeResponse, BadgesMatchedUser } from "../models/user/badges"
import { ErrorResponse } from "../models/error"
import { getUserBadgesQuery } from "../graphql/user/badges.graphql"
import { CalendarMatchedUser, CalendarResponse } from "../models/user/calendar"
import { getUserCalendarQuery } from "../graphql/user/calendar.graphql"

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

export class UserService {
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

    static async getUserCalendar(username: string, year?: number): Promise<CalendarResponse> {
        const invalidUsernameResponse = getInvalidUsernameErrorResponse(username)
        if (invalidUsernameResponse !== null) {
            return {
                isError: true,
                error: invalidUsernameResponse,
                calendar: null
            }
        }
        let calendarResponse: CalendarResponse
        const response: { data: CalendarMatchedUser } = await apolloClient.query<CalendarMatchedUser>({
            query: getUserCalendarQuery(),
            variables: year === undefined ? { "username": username } : { "username": username, "year": year }
        }).catch(err => {
            calendarResponse = {
                isError: true,
                error: {
                    errorCode: 500,
                    errorMessage: `An error occurred while retrieving user calendar - ${err}. Please inform the developer.`
                },
                calendar: null
            }
            return null
        })
        if (calendarResponse === undefined) {
            calendarResponse = {
                isError: false,
                error: null,
                calendar: response.data.matchedUser.userCalendar
            }
        }
        return calendarResponse
    }

}