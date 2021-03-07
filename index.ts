import { MatchedUser } from './models/matchedUser'
import { AllQuestionsCount } from './models/allQuestionsCount'

import express from 'express'
import cors from 'cors'
import { QuestionsResponse, UserResponse } from './models/response'
import { LeetProfileService } from './services/leetprofile.service'

const app = express()
app.use(cors())

app.use('/leetprofile/:user', async (req, res) => {
    if (!req.params.user.match(/^[0-9A-Za-z]+$/)) {
        const userResponse: UserResponse = {
            isError: true,
            error: {
                errorCode: 400,
                errorMessage: "Username can only contain digits or alphabets"
            },
            userProfile: null
        }
        res.send(userResponse)
    } else {
        const user: MatchedUser = await LeetProfileService.getUserProfile(req.params.user)
        if (user == null) {
            const userResponse: UserResponse = {
                isError: true,
                error: {
                    errorCode: 404,
                    errorMessage: "User not found!"
                },
                userProfile: null
            }
            res.send(userResponse)
        } else {
            res.send(user.matchedUser)
        }
    }
})

app.use('/leetquestions', async (_req, res) => {
    const questions: AllQuestionsCount = await LeetProfileService.getAllQuestionsCount()
    if (questions == null) {
        const questionsResponse: QuestionsResponse = {
            isError: true,
            error: {
                errorCode: 404,
                errorMessage: "No questions found!"
            },
            questions: null
        }
        res.send(questionsResponse)
    } else {
        res.send(questions.allQuestionsCount)
    }
})

const port = process.env.PORT || 1100

app.listen(port, () => {
    console.log('Server listening on port 1100')
})