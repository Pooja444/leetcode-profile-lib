import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserProfileQuery(): DocumentNode {
    return gql`
        query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                    profile {
                        realName
                        websites
                        countryName
                        skillTags
                        company
                        school
                        starRating
                        aboutMe
                        userAvatar
                        ranking
                    }
                }
            }
        `
}