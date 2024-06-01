import { CommentsModel } from "./comments-model";

export interface PostModel {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    author: string;
    description: string;
    text: string;
    tags: string[];
    comment: CommentsModel[];
}
