import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getAllQuestionsCountQuery(): DocumentNode {
    return gql`
        query getAllQuestionsCount {
            allQuestionsCount {
                    difficulty
                    count
                }
        }
    `
}