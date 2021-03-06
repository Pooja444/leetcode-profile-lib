import { MatchedUser } from './models/matchedUser';
import { getUserProfileQuery } from './graphql/profile.graphql';
import { apolloClient } from './services/apollo.service';
import { AllQuestionsCount } from './models/allQuestionsCount';
import { getAllQuestionsCountQuery } from './graphql/questions.graphql';

import express from 'express';

async function getAllQuestionsCount(): Promise<AllQuestionsCount> {
    const response = await apolloClient.query<AllQuestionsCount>({
        query: getAllQuestionsCountQuery()
    })
    return response.data
}

async function getUserProfile(username: string): Promise<MatchedUser> {
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

app.use('/leetprofile-questions', async (req, res) => {
    res.send((await getAllQuestionsCount()).allQuestionsCount)
})

const port = process.env.PORT || 1100;

app.listen(port, () => {
    console.log('Server listening on: https://leetcode-profile-lib.herokuapp.com/1100');
});