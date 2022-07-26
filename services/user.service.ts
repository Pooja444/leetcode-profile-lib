import { apolloClient } from "./apollo.service"
import { BadgeResponse, BadgesMatchedUser } from "../models/user/badges"
import { ErrorResponse } from "../models/error"
import { getUserBadgesQuery } from "../graphql/user/badges.graphql"
import { CalendarMatchedUser, CalendarResponse } from "../models/user/calendar"
import { getUserCalendarQuery } from "../graphql/user/calendar.graphql"
import { CommunityStatsMatchedUser, CommunityStatsResponse } from "../models/user/community-stats"
import { getUserCommunityStatsQuery } from "../graphql/user/community-stats.graphql"
import { ContestRankingHistoryResponse, UserContestRankingHistory } from "../models/user/contest-ranking-history"
import { getUserContestRankingHistoryQuery } from "../graphql/user/contest-ranking-history.graphql"
import { ContestRankingResponse, UserContestRanking } from "../models/user/contest-ranking"
import { getUserContestRankingQuery } from "../graphql/user/contest-ranking.graphql"

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
        const invalidUsernameResponse: ErrorResponse = getInvalidUsernameErrorResponse(username)
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
        const invalidUsernameResponse: ErrorResponse = getInvalidUsernameErrorResponse(username)
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

    static async getUserCommunityStats(username: string): Promise<CommunityStatsResponse> {
        const invalidUsernameResponse: ErrorResponse = getInvalidUsernameErrorResponse(username)
        if (invalidUsernameResponse !== null) {
            return {
                isError: true,
                error: invalidUsernameResponse,
                communityStats: null
            }
        }
        let communityStatsResponse: CommunityStatsResponse
        const response: { data: CommunityStatsMatchedUser } = await apolloClient.query<CommunityStatsMatchedUser>({
            query: getUserCommunityStatsQuery(),
            variables: { "username": username }
        }).catch(err => {
            communityStatsResponse = {
                isError: true,
                error: {
                    errorCode: 500,
                    errorMessage: `An error occurred while retrieving user community stats - ${err}. Please inform the developer.`
                },
                communityStats: null
            }
            return null
        })
        if (communityStatsResponse === undefined) {
            communityStatsResponse = {
                isError: false,
                error: null,
                communityStats: response.data.matchedUser.profile
            }
        }
        return communityStatsResponse
    }

    static async getUserContestRankingHistory(username: string): Promise<ContestRankingHistoryResponse> {
        const invalidUsernameResponse: ErrorResponse = getInvalidUsernameErrorResponse(username)
        if (invalidUsernameResponse !== null) {
            return {
                isError: true,
                error: invalidUsernameResponse,
                contestRankingHistory: null
            }
        }
        let contestRankingHistoryResponse: ContestRankingHistoryResponse
        const response: { data: UserContestRankingHistory } = await apolloClient.query<UserContestRankingHistory>({
            query: getUserContestRankingHistoryQuery(),
            variables: { "username": username }
        }).catch(err => {
            contestRankingHistoryResponse = {
                isError: true,
                error: {
                    errorCode: 500,
                    errorMessage: `An error occurred while retrieving user contest ranking history - ${err}. Please inform the developer.`
                },
                contestRankingHistory: null
            }
            return null
        })
        if (contestRankingHistoryResponse === undefined) {
            contestRankingHistoryResponse = {
                isError: false,
                error: null,
                contestRankingHistory: response.data.userContestRankingHistory
            }
        }
        return contestRankingHistoryResponse
    }

    static async getUserContestRanking(username: string): Promise<ContestRankingResponse> {
        const invalidUsernameResponse: ErrorResponse = getInvalidUsernameErrorResponse(username)
        if (invalidUsernameResponse !== null) {
            return {
                isError: true,
                error: invalidUsernameResponse,
                contestRanking: null
            }
        }
        let contestRankingResponse: ContestRankingResponse
        const response: { data: UserContestRanking } = await apolloClient.query<UserContestRanking>({
            query: getUserContestRankingQuery(),
            variables: { "username": username }
        }).catch(err => {
            contestRankingResponse = {
                isError: true,
                error: {
                    errorCode: 500,
                    errorMessage: `An error occurred while retrieving user contest ranking - ${err}. Please inform the developer.`
                },
                contestRanking: null
            }
            return null
        })
        if (contestRankingResponse === undefined) {
            contestRankingResponse = {
                isError: false,
                error: null,
                contestRanking: response.data.userContestRanking
            }
        }
        return contestRankingResponse
    }

}