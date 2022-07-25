import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserContestRankingQuery(): DocumentNode {
    return gql`
            query userContestRanking($username: String!) {
                userContestRanking(username: $username) {
                    attendedContestsCount
                    rating
                    globalRanking
                    totalParticipants
                    topPercentage
                    badge {
                        name
                    }
                }
            }
        `
}