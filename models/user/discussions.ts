import { ErrorResponse } from "../error";
import { PageInfo } from "../page-info";
import { PostNodeDetail } from "../post-node-detail";

export interface DiscussionsNode {
    id: string
    title: string
    url: string
    viewCount: number
    post: PostNodeDetail
}

export interface Discussions {
    pageInfo: PageInfo
    edges: DiscussionsNode[]
}

export interface UserCategoryTopics {
    userCategoryTopics: Discussions
}

export interface DiscussionsResponse {
    isError: boolean
    error?: ErrorResponse
    discussions: Discussions
}