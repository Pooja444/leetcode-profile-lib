import { AllQuestionsCount } from "./allQuestionsCount";
import { MatchedUser } from "./matchedUser";

interface ErrorResponse {
    errorCode: number
    errorMessage: string
}

export interface UserResponse {
    isError: boolean
    error?: ErrorResponse
    userProfile: MatchedUser
}

export interface QuestionsResponse {
    isError: boolean
    error?: ErrorResponse
    questions: AllQuestionsCount
}