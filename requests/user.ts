import { UserService } from '../services/user.service'
import * as resp from '../models/user'

export class UserRequests {
    static async getUserBadges(req: { params: { username: string } }, res: { send: (arg0: resp.BadgeResponse) => void }) {
        res.send(await UserService.getUserBadges(req.params.username))
    }

    static async getUserCalendarWithoutYear(req: { params: { username: string } }, res: { send: (arg0: resp.CalendarResponse) => void }) {
        res.send(await UserService.getUserCalendar(req.params.username))
    }

    static async getUserCalendarWithYear(req: { params: { username: string, year: number } }, res: { send: (arg0: resp.CalendarResponse) => void }) {
        res.send(await UserService.getUserCalendar(req.params.username, req.params.year))
    }

    static async getUserCommunityStats(req: { params: { username: string } }, res: { send: (arg0: resp.CommunityStatsResponse) => void }) {
        res.send(await UserService.getUserCommunityStats(req.params.username))
    }

    static async getUserContestRankingHistory(req: { params: { username: string } }, res: { send: (arg0: resp.ContestRankingHistoryResponse) => void }) {
        res.send(await UserService.getUserContestRankingHistory(req.params.username))
    }

    static async getUserContestRanking(req: { params: { username: string } }, res: { send: (arg0: resp.ContestRankingResponse) => void }) {
        res.send(await UserService.getUserContestRanking(req.params.username))
    }

    static async getUserDiscussions(req: { params: { username: string, first?: number, skip?: number } }, res: { send: (arg0: resp.DiscussionsResponse) => void }) {
        res.send(await UserService.getUserDiscussions(req.params.username, req.params.first, req.params.skip))
    }

    static async getUserLanguages(req: { params: { username: string } }, res: { send: (arg0: resp.LanguagesResponse) => void }) {
        res.send(await UserService.getUserLanguages(req.params.username))
    }

    static async getUserProblemsSolvedBeatsStats(req: { params: { username: string } }, res: { send: (arg0: resp.ProblemsSolvedBeatsStatsResponse) => void }) {
        res.send(await UserService.getUserProblemsSolvedBeatsStats(req.params.username))
    }

    static async getUserProfile(req: { params: { username: string } }, res: { send: (arg0: resp.ProfileResponse) => void }) {
        res.send(await UserService.getUserProfile(req.params.username))
    }

    static async getUserRecentSubmissions(req: { params: { username: string }, query: { limit: string } }, res: { send: (arg0: resp.RecentSubmissionsResponse) => void }) {
        res.send(await UserService.getUserRecentSubmissions(req.params.username, req.query.limit))
    }

    static async getUserSkills(req: { params: { username: string } }, res: { send: (arg0: resp.SkillsResponse) => void }) {
        res.send(await UserService.getUserSkills(req.params.username))
    }

    static async getUserSocial(req: { params: { username: string } }, res: { send: (arg0: resp.SocialResponse) => void }) {
        res.send(await UserService.getUserSocial(req.params.username))
    }

    static async getUserSolutions(req: { params: { username: string }, query: { skip: string, first: string } }, res: { send: (arg0: resp.SolutionsResponse) => void }) {
        res.send(await UserService.getUserSolutions(req.params.username, req.query.skip, req.query.first))
    }

    static async getUserSubmitStats(req: { params: { username: string } }, res: { send: (arg0: resp.SubmitStatsResponse) => void }) {
        res.send(await UserService.getUserSubmitStats(req.params.username))
    }
}