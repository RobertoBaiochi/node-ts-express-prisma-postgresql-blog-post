import { CommentsModel } from "../../models/comments-model";
import { updateCommentRepository } from "../../repositories/comments/update-comment-reposioty";
import * as HttpResponse from "../../utils/http-helper";

export const patchCommentService = async (
    id: number,
    bodyContent: Partial<CommentsModel>
) => {
    let result = null;
    const { comment } = bodyContent;

    if (!id || !comment) {
        result = await HttpResponse.badRequest();
        return result;
    }

    const data = await updateCommentRepository(id, bodyContent);

    if (!data) {
        result = await HttpResponse.badRequest();
        return result;
    }

    result = await HttpResponse.ok(data);
    return result;
};
