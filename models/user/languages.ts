import { ErrorResponse } from "../error";

export interface LanguageProblemCount {
    languageName: string
    problemsSolved: number
}

export interface LanguageProblemCounts {
    languageProblemCount: LanguageProblemCount[]
}

export interface LanguagesMatchedUser {
    matchedUser: LanguageProblemCounts
}

export interface LanguagesResponse {
    isError: boolean
    error?: ErrorResponse
    languages: LanguageProblemCount[]
}