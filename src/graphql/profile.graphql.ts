import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserProfileQuery(): DocumentNode {
    return gql`
        query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                    username
                    socialAccounts
                    githubUrl
                    contributions {
                        points
                        questionCount
                        testcaseCount
                    }
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
                        reputation
                        ranking
                    }
                    submissionCalendar
                    submitStats {
                        acSubmissionNum {          
                            difficulty
                            count
                            submissions
                        }
                        totalSubmissionNum {        
                            difficulty
                            count
                            submissions
                        }
                    }
                }
            }
        `
}