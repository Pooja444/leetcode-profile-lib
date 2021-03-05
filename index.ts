import { MatchedUser } from './models/matchedUser';
import { getUserProfileQuery } from './graphql/profile.graphql';
import { apolloClient } from './services/apollo.service';
import { AllQuestionsCount } from './models/allQuestionsCount';
import { getAllQuestionsCountQuery } from './graphql/questions.graphql';

import express from 'express';

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

const app = express()

app.use('/leetprofile/:user', async (req, res) => {
    res.send((await getUserProfile(req.params.user)).matchedUser)
})

app.listen(1100, '0.0.0.0', () => {
    console.log('Server listening on:', 'http://0.0.0.0:1100');
});