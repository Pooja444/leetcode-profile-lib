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