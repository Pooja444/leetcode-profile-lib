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
import { DiscussionsResponse, UserCategoryTopics } from "../models/user/discussions"
import { LanguagesMatchedUser, LanguagesResponse } from "../models/user/languages"
import { getUserDiscussionsQuery } from "../graphql/user/discussions.graphql"
import { getUserLanguagesQuery } from "../graphql/user/languages.graphql"
import { ProblemsSolvedBeatsStatsMatchedUser, ProblemsSolvedBeatsStatsResponse } from "../models/user/problems-solved-beats-stats"
import { getUserProblemsSolvedBeatsStatsQuery } from "../graphql/user/problems-solved-beats-stats.graphql"
import { ProfileMatchedUser, ProfileResponse } from "../models/user/profile"
import { getUserProfileQuery } from "../graphql/user/profile.graphql"
import { RecentSubmissionsAcList, RecentSubmissionsResponse } from "../models/user/recent-submissions"
import { getUserRecentSubmissionsQuery } from "../graphql/user/recent-submissions.graphql"

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

    static async getUserDiscussions(username: string, first?: number, skip?: number): Promise<DiscussionsResponse> {
        const invalidUsernameResponse: ErrorResponse = getInvalidUsernameErrorResponse(username)
        if (invalidUsernameResponse !== null) {
            return {
                isError: true,
                error: invalidUsernameResponse,
                discussions: null
            }
        }
        let discussionsResponse: DiscussionsResponse
        const response: { data: UserCategoryTopics } = await apolloClient.query<UserCategoryTopics>({
            query: getUserDiscussionsQuery(),
            variables: { "username": username, "first": first, "skip": skip }
        }).catch(err => {
            discussionsResponse = {
                isError: true,
                error: {
                    errorCode: 500,
                    errorMessage: `An error occurred while retrieving user discussions - ${err}. Please inform the developer.`
                },
                discussions: null
            }
            return null
        })
        if (discussionsResponse === undefined) {
            discussionsResponse = {
                isError: false,
                error: null,
                discussions: response.data.userCategoryTopics
            }
        }
        return discussionsResponse
    }

    static async getUserLanguages(username: string): Promise<LanguagesResponse> {
        const invalidUsernameResponse: ErrorResponse = getInvalidUsernameErrorResponse(username)
        if (invalidUsernameResponse !== null) {
            return {
                isError: true,
                error: invalidUsernameResponse,
                languages: null
            }
        }
        let languagesResponse: LanguagesResponse
        const response: { data: LanguagesMatchedUser } = await apolloClient.query<LanguagesMatchedUser>({
            query: getUserLanguagesQuery(),
            variables: { "username": username }
        }).catch(err => {
            languagesResponse = {
                isError: true,
                error: {
                    errorCode: 500,
                    errorMessage: `An error occurred while retrieving user languages - ${err}. Please inform the developer.`
                },
                languages: null
            }
            return null
        })
        if (languagesResponse === undefined) {
            languagesResponse = {
                isError: false,
                error: null,
                languages: response.data.matchedUser.languageProblemCount
            }
        }
        return languagesResponse
    }

    static async getUserProblemsSolvedBeatsStats(username: string): Promise<ProblemsSolvedBeatsStatsResponse> {
        const invalidUsernameResponse: ErrorResponse = getInvalidUsernameErrorResponse(username)
        if (invalidUsernameResponse !== null) {
            return {
                isError: true,
                error: invalidUsernameResponse,
                problemsSolvedBeatsStats: null
            }
        }
        let problemsSolvedBeatsStatsResponse: ProblemsSolvedBeatsStatsResponse
        const response: { data: ProblemsSolvedBeatsStatsMatchedUser } = await apolloClient.query<ProblemsSolvedBeatsStatsMatchedUser>({
            query: getUserProblemsSolvedBeatsStatsQuery(),
            variables: { "username": username }
        }).catch(err => {
            problemsSolvedBeatsStatsResponse = {
                isError: true,
                error: {
                    errorCode: 500,
                    errorMessage: `An error occurred while retrieving user problems solved beats stats - ${err}. Please inform the developer.`
                },
                problemsSolvedBeatsStats: null
            }
            return null
        })
        if (problemsSolvedBeatsStatsResponse === undefined) {
            problemsSolvedBeatsStatsResponse = {
                isError: false,
                error: null,
                problemsSolvedBeatsStats: response.data.matchedUser.problemsSolvedBeatsStats
            }
        }
        return problemsSolvedBeatsStatsResponse
    }

    static async getUserProfile(username: string): Promise<ProfileResponse> {
        const invalidUsernameResponse: ErrorResponse = getInvalidUsernameErrorResponse(username)
        if (invalidUsernameResponse !== null) {
            return {
                isError: true,
                error: invalidUsernameResponse,
                profile: null
            }
        }
        let profileResponse: ProfileResponse
        const response: { data: ProfileMatchedUser } = await apolloClient.query<ProfileMatchedUser>({
            query: getUserProfileQuery(),
            variables: { "username": username }
        }).catch(err => {
            profileResponse = {
                isError: true,
                error: {
                    errorCode: 500,
                    errorMessage: `An error occurred while retrieving user profile - ${err}. Please inform the developer.`
                },
                profile: null
            }
            return null
        })
        if (profileResponse === undefined) {
            profileResponse = {
                isError: false,
                error: null,
                profile: response.data.matchedUser.profile
            }
        }
        return profileResponse
    }

    static async getUserRecentSubmissions(username: string, limit?: string): Promise<RecentSubmissionsResponse> {
        const invalidUsernameResponse: ErrorResponse = getInvalidUsernameErrorResponse(username)
        if (invalidUsernameResponse !== null) {
            return {
                isError: true,
                error: invalidUsernameResponse,
                recentSubmissions: null
            }
        }
        let recentSubmissionsResponse: RecentSubmissionsResponse
        let variables = {
            "username": username
        }
        if (limit !== undefined) {
            let limitValue = Number(limit)
            if (isNaN(limitValue)) {
                recentSubmissionsResponse = {
                    isError: true,
                    error: {
                        errorCode: 400,
                        errorMessage: `The provided limit value ${limit} is not a number, please provide a correct limit numeric value greater than zero`
                    },
                    recentSubmissions: null
                }
                return recentSubmissionsResponse
            }
            if (limitValue <= 0) {
                recentSubmissionsResponse = {
                    isError: true,
                    error: {
                        errorCode: 400,
                        errorMessage: `The provided limit value should be greater than zero, but you have provided ${limit}`
                    },
                    recentSubmissions: null
                }
                return recentSubmissionsResponse
            }
            variables["limit"] = limit
        }
        const response: { data: RecentSubmissionsAcList } = await apolloClient.query<RecentSubmissionsAcList>({
            query: getUserRecentSubmissionsQuery(),
            variables: variables
        }).catch(err => {
            recentSubmissionsResponse = {
                isError: true,
                error: {
                    errorCode: 500,
                    errorMessage: `An error occurred while retrieving user recent submissions - ${err}. Please inform the developer.`
                },
                recentSubmissions: null
            }
            return null
        })
        if (recentSubmissionsResponse === undefined) {
            recentSubmissionsResponse = {
                isError: false,
                error: null,
                recentSubmissions: response.data.recentAcSubmissionList
            }
        }
        return recentSubmissionsResponse
    }

}