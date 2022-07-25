import { MatchedUser } from './models-old/matchedUser'
import { AllQuestionsCount } from './models-old/allQuestionsCount'

import { QuestionsResponse, UserResponse } from './models-old/response'
import { LeetProfileService } from './services/leetprofile.service'

export async function getLeetUserProfile(req: { params: { user: any } }, res: { send: (arg0: UserResponse) => void }) {
    let userResponse: UserResponse
    const username = req.params.user
    if (!username.match(/^[0-9A-Za-z]+$/)) {
        userResponse = {
            isError: true,
            error: {
                errorCode: 400,
                errorMessage: `Invalid username ${username}. Username can only contain digits or alphabets`
            },
            userProfile: null
        }
        res.send(userResponse)
    } else {
        const user: MatchedUser = await LeetProfileService.getUserProfile(username)
        if (user == null) {
            userResponse = {
                isError: true,
                error: {
                    errorCode: 404,
                    errorMessage: `Leetcode user for username ${username} not found!`
                },
                userProfile: null
            }
            res.send(userResponse)
        } else {
            userResponse = {
                isError: false,
                userProfile: user.matchedUser
            }
            res.send(userResponse)
        }
    }
}

export async function getLeetQuestionsCount(req: any, res: { send: (arg0: QuestionsResponse) => void }) {
    let questionsResponse: QuestionsResponse
    const questions: AllQuestionsCount = await LeetProfileService.getAllQuestionsCount()
    if (questions == null) {
        questionsResponse = {
            isError: true,
            error: {
                errorCode: 404,
                errorMessage: "No leetcode questions found!"
            },
            questions: null
        }
        res.send(questionsResponse)
    } else {
        questionsResponse = {
            isError: false,
            questions: questions.allQuestionsCount
        }
        res.send(questionsResponse)
    }
}