import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserRecentSubmissionsQuery(): DocumentNode {
    return gql`
        query getUserRecentSubmissions($username: String!, $limit: Int!) {
            recentAcSubmissionList(username: $username, limit: $limit) {
                id
                title
                titleSlug
                timestamp
            }
        }
        `
}