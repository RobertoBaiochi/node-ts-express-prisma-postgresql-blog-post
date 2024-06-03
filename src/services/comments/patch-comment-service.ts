import { CommentsModel } from "../../models/comments-model";
import { updateCommentRepository } from "../../repositories/comments/update-comment-reposioty";
import * as HttpResponse from "../../utils/http-helper";

export const patchCommentService = async (
    id: number,
    bodyContent: Partial<CommentsModel>
) => {
    let response = null;

    try {
        const { comment } = bodyContent;

        if (!id || !comment) {
            response = await HttpResponse.badRequest();
            return response;
        }

        const data = await updateCommentRepository(id, bodyContent);

        if (!data) {
            response = await HttpResponse.badRequest();
            return response;
        }

        response = await HttpResponse.ok(data);
        return response;
    } catch (err) {
        console.error("Error updating comment by ID: ", err);

        response = await HttpResponse.serverError();
        return response;
    }
};
