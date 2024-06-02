import { CommentsModel } from "./comments-model";

export interface PostModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    author: string;
    description: string;
    text: string;
    tags: string[];
    comment: CommentsModel[];
}
