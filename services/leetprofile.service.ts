import { getUserProfileQuery } from "../graphql/profile.graphql"
import { getAllQuestionsCountQuery } from "../graphql/questions.graphql"
import { AllQuestionsCount } from "../models/allQuestionsCount"
import { MatchedUser } from "../models/matchedUser"
import { apolloClient } from "./apollo.service"

export class LeetProfileService {

    static async getAllQuestionsCount(): Promise<AllQuestionsCount> {
        const response = await apolloClient.query<AllQuestionsCount>({
            query: getAllQuestionsCountQuery()
        })
        return response.data
    }

    static async getUserProfile(username: string): Promise<MatchedUser> {
        const response = await apolloClient.query<MatchedUser>({
            query: getUserProfileQuery(),
            variables: { "username": username }
        })
        .catch(err => {
            return err
        })
        return response.data
    }

}