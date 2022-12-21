import { AllQuestionsCount } from './models-old/allQuestionsCount'

import { QuestionsResponse } from './models-old/response'
import { LeetProfileService } from './services/leetprofile.service'

// Delete below 2 imports later
import express from 'express'
import cors from 'cors'

import { UserService } from './services/user.service'

import * as resp from './models/user'

export async function getUserBadges(req: { params: { username: string } }, res: { send: (arg0: resp.BadgeResponse) => void }) {
    res.send(await UserService.getUserBadges(req.params.username))
}

export async function getUserCalendarWithoutYear(req: { params: { username: string } }, res: { send: (arg0: resp.CalendarResponse) => void }) {
    res.send(await UserService.getUserCalendar(req.params.username))
}

export async function getUserCalendarWithYear(req: { params: { username: string, year: number } }, res: { send: (arg0: resp.CalendarResponse) => void }) {
    res.send(await UserService.getUserCalendar(req.params.username, req.params.year))
}

export async function getUserCommunityStats(req: { params: { username: string } }, res: { send: (arg0: resp.CommunityStatsResponse) => void }) {
    res.send(await UserService.getUserCommunityStats(req.params.username))
}

export async function getUserContestRankingHistory(req: { params: { username: string } }, res: { send: (arg0: resp.ContestRankingHistoryResponse) => void }) {
    res.send(await UserService.getUserContestRankingHistory(req.params.username))
}

export async function getUserContestRanking(req: { params: { username: string } }, res: { send: (arg0: resp.ContestRankingResponse) => void }) {
    res.send(await UserService.getUserContestRanking(req.params.username))
}

export async function getUserDiscussions(req: { params: { username: string, first?: number, skip?: number } }, res: { send: (arg0: resp.DiscussionsResponse) => void }) {
    res.send(await UserService.getUserDiscussions(req.params.username, req.params.first, req.params.skip))
}

export async function getUserLanguages(req: { params: { username: string } }, res: { send: (arg0: resp.LanguagesResponse) => void }) {
    res.send(await UserService.getUserLanguages(req.params.username))
}

export async function getUserProblemsSolvedBeatsStats(req: { params: { username: string } }, res: { send: (arg0: resp.ProblemsSolvedBeatsStatsResponse) => void }) {
    res.send(await UserService.getUserProblemsSolvedBeatsStats(req.params.username))
}

export async function getUserProfile(req: { params: { username: string } }, res: { send: (arg0: resp.ProfileResponse) => void }) {
    res.send(await UserService.getUserProfile(req.params.username))
}

export async function getUserRecentSubmissions(req: { params: { username: string }, query: { limit: string } }, res: { send: (arg0: resp.RecentSubmissionsResponse) => void }) {
    res.send(await UserService.getUserRecentSubmissions(req.params.username, req.query.limit))
}

export async function getUserSkills(req: { params: { username: string } }, res: { send: (arg0: resp.SkillsResponse) => void }) {
    res.send(await UserService.getUserSkills(req.params.username))
}

export async function getUserSocial(req: { params: { username: string } }, res: { send: (arg0: resp.SocialResponse) => void }) {
    res.send(await UserService.getUserSocial(req.params.username))
}

export async function getUserSolutions(req: { params: { username: string }, query: { skip: string, first: string } }, res: { send: (arg0: resp.SolutionsResponse) => void }) {
    res.send(await UserService.getUserSolutions(req.params.username, req.query.skip, req.query.first))
}

export async function getUserSubmitStats(req: { params: { username: string } }, res: { send: (arg0: resp.SubmitStatsResponse) => void }) {
    res.send(await UserService.getUserSubmitStats(req.params.username))
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