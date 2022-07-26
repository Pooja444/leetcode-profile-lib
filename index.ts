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

export async function getUserBadges(req: { params: { username: string } }, res: { send: (arg0: BadgeResponse) => void }) {
    const badgeResponse: BadgeResponse = await UserService.getUserBadges(req.params.username)
    res.send(badgeResponse)
}

export async function getUserCalendarWithoutYear(req: { params: { username: string } }, res: { send: (arg0: CalendarResponse) => void }) {
    const calendarResponse: CalendarResponse = await UserService.getUserCalendar(req.params.username)
    res.send(calendarResponse)
}

export async function getUserCalendarWithYear(req: { params: { username: string, year: number } }, res: { send: (arg0: CalendarResponse) => void }) {
    const calendarResponse: CalendarResponse = await UserService.getUserCalendar(req.params.username, req.params.year)
    res.send(calendarResponse)
}

export async function getUserCommunityStats(req: { params: { username: string } }, res: { send: (arg0: CommunityStatsResponse) => void }) {
    const communityStatsResponse: CommunityStatsResponse = await UserService.getUserCommunityStats(req.params.username)
    res.send(communityStatsResponse)
}

export async function getUserContestRankingHistory(req: { params: { username: string } }, res: { send: (arg0: ContestRankingHistoryResponse) => void }) {
    const contestRankingHistoryResponse: ContestRankingHistoryResponse = await UserService.getUserContestRankingHistory(req.params.username)
    res.send(contestRankingHistoryResponse)
}

export async function getUserContestRanking(req: { params: { username: string } }, res: { send: (arg0: ContestRankingResponse) => void }) {
    const contestRankingResponse: ContestRankingResponse = await UserService.getUserContestRanking(req.params.username)
    res.send(contestRankingResponse)
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

const port = 3200

app.listen(port, () => {
    console.log('Listening on server https://localhost:3200/')
})