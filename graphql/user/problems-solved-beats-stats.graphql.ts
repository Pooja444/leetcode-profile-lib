import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserProblemsSolvedBeatsStatsQuery(): DocumentNode {
    return gql`
        query getUserProblemsSolvedBeatsStatsQuery($username: String!) {
                matchedUser(username: $username) {
                    problemsSolvedBeatsStats {
                        difficulty
                        percentage
                    }
                }
            }
        `
}