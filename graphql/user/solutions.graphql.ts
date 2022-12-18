import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserSolutionsQuery(): DocumentNode {
    return gql`
        query getUserSolutions($username: String!, $skip: Int, $first: Int) {
            userSolutionTopics(username: $username, skip: $skip, first: $first) {
                pageInfo {
                    hasNextPage
                }
                edges {
                    node {
                        id
                        title
                        url
                        viewCount
                        questionTitle
                        post {
                            creationDate
                            voteCount
                        }
                    }
                }
            }
        }
        `
}