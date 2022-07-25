import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserSocialQuery(): DocumentNode {
    return gql`
        query getUserSocial($username: String!) {
                matchedUser(username: $username) {
                    githubUrl
                    twitterUrl
                    linkedinUrl
                }
            }
        `
}