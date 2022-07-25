import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserCommunityStatsQuery(): DocumentNode {
    return gql`
        query getUserCommunityStats($username: String!) {
                matchedUser(username: $username) {
                    profile {
                        reputation
                        reputationDiff
                        postViewCount
                        postViewCountDiff
                        solutionCount
                        solutionCountDiff
                        categoryDiscussCount
                        categoryDiscussCountDiff
                    }
                }
            }
        `
}
