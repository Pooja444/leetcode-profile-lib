import { AllQuestionsCount } from './models-old/allQuestionsCount'

import { QuestionsResponse } from './models-old/response'
import { LeetProfileService } from './services/leetprofile.service'

import YAML from 'yamljs';

export function getSwaggerYaml(swaggerFilePath: string) {
    return YAML.load(`${swaggerFilePath}/docs/swagger.yaml`)
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

export { UserRequests } from './requests/user'