import { DocumentNode } from "apollo-boost"
import gql from "graphql-tag"

export function getUserCalendarQuery(): DocumentNode {
    return gql`
        query getUserCalendar($username: String!, $year: Int) {
                matchedUser(username: $username) {
                    userCalendar(year: $year) {
                        activeYears
                        streak
                        totalActiveDays
                        dccBadges {
                            timestamp
                            badge {
                                name
                                icon
                            }
                        }
                        submissionCalendar
                    }
                }
            }
        `
}