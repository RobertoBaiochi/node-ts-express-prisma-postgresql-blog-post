import { CommentsModel } from "../../models/comments-model";
import { insertNewCommentRepository } from "../../repositories/comments/insert-new-comment-repository";
import * as HttpResponse from "../../utils/http-helper";

export const insertNewCommentService = async (
    postId: number,
    bodyContent: Partial<CommentsModel>
) => {
    const { name, comment } = bodyContent;
    let response = null;

    try {
        if (!name || !comment) {
            response = await HttpResponse.badRequest();
            return response;
        }

        const data = await insertNewCommentRepository(postId, name, comment);

        if (!data) {
            response = await HttpResponse.badRequest();
            return response;
        }

        response = await HttpResponse.created();

        return response;
    } catch (err) {
        console.error("Error posting comment: ", err);

        response = await HttpResponse.serverError();
        return response;
    }
};
