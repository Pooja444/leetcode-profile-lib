import { AllQuestionsCount } from './models-old/allQuestionsCount'

import { QuestionsResponse } from './models-old/response'
import { LeetProfileService } from './services/leetprofile.service'

// Delete below imports later
import express from 'express'
import cors from 'cors'
import { BadgeResponse } from './models/user/badges'
import { UserService } from './services/user.service'
import { CalendarResponse } from './models/user/calendar'
import { CommunityStatsResponse } from './models/user/community-stats'
import { ContestRankingHistoryResponse } from './models/user/contest-ranking-history'
import { ContestRankingResponse } from './models/user/contest-ranking'
import { DiscussionsResponse } from './models/user/discussions'
import { LanguagesResponse } from './models/user/languages'
import { ProblemsSolvedBeatsStatsResponse } from './models/user/problems-solved-beats-stats'

export async function getUserBadges(req: { params: { username: string } }, res: { send: (arg0: BadgeResponse) => void }) {
    res.send(await UserService.getUserBadges(req.params.username))
}

export async function getUserCalendarWithoutYear(req: { params: { username: string } }, res: { send: (arg0: CalendarResponse) => void }) {
    res.send(await UserService.getUserCalendar(req.params.username))
}

export async function getUserCalendarWithYear(req: { params: { username: string, year: number } }, res: { send: (arg0: CalendarResponse) => void }) {
    res.send(await UserService.getUserCalendar(req.params.username, req.params.year))
}

export async function getUserCommunityStats(req: { params: { username: string } }, res: { send: (arg0: CommunityStatsResponse) => void }) {
    res.send(await UserService.getUserCommunityStats(req.params.username))
}

export async function getUserContestRankingHistory(req: { params: { username: string } }, res: { send: (arg0: ContestRankingHistoryResponse) => void }) {
    res.send(await UserService.getUserContestRankingHistory(req.params.username))
}

export async function getUserContestRanking(req: { params: { username: string } }, res: { send: (arg0: ContestRankingResponse) => void }) {
    res.send(await UserService.getUserContestRanking(req.params.username))
}

export async function getUserDiscussions(req: { params: { username: string, first?: number, skip?: number } }, res: { send: (arg0: DiscussionsResponse) => void }) {
    res.send(await UserService.getUserDiscussions(req.params.username, req.params.first, req.params.skip))
}

export async function getUserLanguages(req: { params: { username: string } }, res: { send: (arg0: LanguagesResponse) => void }) {
    res.send(await UserService.getUserLanguages(req.params.username))
}

export async function getUserProblemsSolvedBeatsStats(req: { params: { username: string } }, res: { send: (arg0: ProblemsSolvedBeatsStatsResponse) => void }) {
    res.send(await UserService.getUserProblemsSolvedBeatsStats(req.params.username))
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


// Delete below code later - and add it to leetprofile.server

const app = express()

app.use(cors())
app.get('/user/:username/badges', getUserBadges)
app.get('/user/:username/calendar', getUserCalendarWithoutYear)
app.get('/user/:username/calendar/:year', getUserCalendarWithYear)
app.get('/user/:username/community-stats', getUserCommunityStats)
app.get('/user/:username/contest-ranking-history', getUserContestRankingHistory)
app.get('/user/:username/contest-ranking', getUserContestRanking)
app.get('/user/:username/discussions', getUserDiscussions)
app.get('/user/:username/languages', getUserLanguages)
app.get('/user/:username/problems-solved-beats-stats', getUserProblemsSolvedBeatsStats)

const port = 3200

app.listen(port, () => {
    console.log('Listening on server https://localhost:3200/')
})