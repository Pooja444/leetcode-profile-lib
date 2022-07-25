import { Questions } from "./allQuestionsCount";
import { User } from "./matchedUser";

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