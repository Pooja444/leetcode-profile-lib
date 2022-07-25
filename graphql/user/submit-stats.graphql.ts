import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserSubmitStatsQuery(): DocumentNode {
    return gql`
        query getUserSubmitStats($username: String!) {
                matchedUser(username: $username) {
                    submitStats {
                        acSubmissionNum {          
                            difficulty
                            count
                            submissions
                        }
                    }
                    problemsSolvedBeatsStats {
                        difficulty
                        percentage
                    }
                }
            }
        `
}