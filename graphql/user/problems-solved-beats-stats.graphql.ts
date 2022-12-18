import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserProblemsSolvedBeatsStatsQuery(): DocumentNode {
    return gql`
        query getUserProblemsSolvedBeatsStats($username: String!) {
                matchedUser(username: $username) {
                    problemsSolvedBeatsStats {
                        difficulty
                        percentage
                    }
                }
            }
        `
}