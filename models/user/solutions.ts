import { PageInfo } from "../page-info";
import { PostNodeDetail } from "../post-node-detail";

export interface SolutionsNode {
    id: string
    title: string
    url: string
    viewCount: number
    questionTitle: string
    post: PostNodeDetail
}

export interface Solutions {
    pageInfo: PageInfo
    edges: SolutionsNode[]
}

export interface UserSolutionTopics {
    userSolutionTopics: Solutions
}