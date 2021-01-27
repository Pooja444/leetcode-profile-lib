import { MatchedUser } from './models/matchedUser';
import { getUserProfileQuery } from './graphql/profile.graphql';
import { apolloClient } from './services/apollo.service';
import { AllQuestionsCount, Questions } from './models/allQuestionsCount';
import { getAllQuestionsCountQuery } from './graphql/questions.graphql';

export async function getAllQuestionsCount(): Promise<AllQuestionsCount> {
    const response = await apolloClient.query<AllQuestionsCount>({
        query: getAllQuestionsCountQuery()
    })
    return response.data
}

export async function getUserProfile(username: string): Promise<MatchedUser> {
    const response = await apolloClient.query<MatchedUser>({
        query: getUserProfileQuery(),
        variables: { "username": username }
    })
    return response.data
}
