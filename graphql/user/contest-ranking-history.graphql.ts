import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserContestRankingHistoryQuery(): DocumentNode {
    return gql`
            query getUserContestRankingHistory($username: String!) {
                userContestRankingHistory(username: $username) {
                    attended
                    trendDirection
                    problemsSolved
                    totalProblems
                    finishTimeInSeconds
                    rating
                    ranking
                    contest {
                        title
                        startTime
                    }
                }
            }
        `
}