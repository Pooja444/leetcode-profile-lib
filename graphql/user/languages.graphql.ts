import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserLanguagesQuery(): DocumentNode {
    return gql`
        query getUserLanguages($username: String!) {
                matchedUser(username: $username) {
                    languageProblemCount {
                        languageName
                        problemsSolved
                    }
                }
            }
        `
}