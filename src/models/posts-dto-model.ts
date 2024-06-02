import { CommentsDTOModel } from "./comments-dto.model";

export interface PostDTOModel {
    createdAt: Date;
    title: string;
    author: string;
    description: string;
    text: string;
    tags: string[];
    comment: CommentsDTOModel[];
}
