import { ApolloQueryResult } from 'apollo-boost';
// import { Config } from './src/models/config';
import { MatchedUser } from './models/matchedUser';
import { getUserProfileQuery } from './graphql/profile.graphql';
import { apolloClient } from './services/apollo.service';
import { AllQuestionsCount } from './models/allQuestionsCount';
import { getAllQuestionsCountQuery } from './graphql/questions.graphql';
// let config: Config = require('./config.json');

export function getAllQuestionsCount(): Promise<ApolloQueryResult<AllQuestionsCount[]>> {
    return apolloClient.query<AllQuestionsCount[]>({
        query: getAllQuestionsCountQuery()
    })
}

export function getUserProfile(username: string): Promise<ApolloQueryResult<MatchedUser>> {
    return apolloClient.query<MatchedUser>({
        query: getUserProfileQuery(),
        variables: { "username": username }
    })
}

// export const questionsData: Promise<AllQuestionsCount[]> = getAllQuestionsCount(config.username)
//     .then((response: ApolloQueryResult<AllQuestionsCount[]>) => {
//         console.log(response.data)
//         return response.data
//     })

// export const profileData: Promise<MatchedUser> = getUserProfile(config.username)
//     .then((response: ApolloQueryResult<MatchedUser>) => {
//         console.log(response.data)
//         return response.data
//     })