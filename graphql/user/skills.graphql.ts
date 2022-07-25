import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserSkillsQuery(): DocumentNode {
    return gql`
        query getUserSkills($username: String!) {
                matchedUser(username: $username) {
                    tagProblemCounts {
                        advanced {
                            tagName
                            tagSlug
                            problemsSolved
                        }
                        intermediate {
                            tagName
                            tagSlug
                            problemsSolved
                        }
                        fundamental {
                            tagName
                            tagSlug
                            problemsSolved
                        }
                    }
                }
            }
        `
}