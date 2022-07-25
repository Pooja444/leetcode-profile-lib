import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserBadgesQuery(): DocumentNode {
    return gql`
        query getUserBadges($username: String!) {
                matchedUser(username: $username) {
                    badges {
                        id
                        name
                        shortName
                        displayName
                        icon
                        hoverText
                        medal {
                            slug
                            config {
                                iconGif
                                iconGifBackground
                            }
                        }
                        creationDate
                        category
                    }
                    upcomingBadges {
                        name
                        icon
                        progress
                    }
                }
            }
        `
}