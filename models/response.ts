import { AllQuestionsCount, Questions } from "./allQuestionsCount";
import { MatchedUser, User } from "./matchedUser";

interface ErrorResponse {
    errorCode: number
    errorMessage: string
}

export interface UserResponse {
    isError: boolean
    error?: ErrorResponse
    userProfile: User
}

export interface QuestionsResponse {
    isError: boolean
    error?: ErrorResponse
    questions: Questions[]
}