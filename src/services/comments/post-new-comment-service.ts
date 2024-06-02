import { CommentsModel } from "../../models/comments-model";
import { insertNewCommentRepository } from "../../repositories/comments/insert-new-comment-repository";
import * as HttpResponse from "../../utils/http-helper";

export const insertNewCommentService = async (
    postId: number,
    bodyContent: Partial<CommentsModel>
) => {
    const { name, comment } = bodyContent;
    let response = null;

    if (!name || !comment) {
        response = await HttpResponse.badRequest();
        return response;
    }

    const data = await insertNewCommentRepository(postId, name, comment);

    response = await HttpResponse.created();

    return response;
};
