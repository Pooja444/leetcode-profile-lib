import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserDiscussionsQuery(): DocumentNode {
    return gql`
        query getUserDiscussionsQuery($username: String!, $first: Int, $skip: Int) {
            userCategoryTopics(username: $username, first: $first, skip: $skip) {
                pageInfo {
                    hasNextPage
                }
                edges {
                    node {
                        id
                        title
                        url
                        viewCount
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