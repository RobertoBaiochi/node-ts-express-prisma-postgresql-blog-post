import { deleteCommentRepository } from "../../repositories/comments/delete-comment-repository";
import { findAllComments } from "../../repositories/comments/find-comment-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const deleteCommentService = async (id: number) => {
    let response = null;

    if (!id) {
        response = await HttpResponse.badRequest();
        return response;
    }

    try {
        const isExist = await findAllComments(id);

        if (!isExist) {
            response = await HttpResponse.badRequest();
            return response;
        }

        const data = await deleteCommentRepository(id);

        if (!data) {
            response = await HttpResponse.badRequest();
            return response;
        }

        response = await HttpResponse.ok({ message: "Post Deleted" });

        return response;
    } catch (err) {
        console.error("Error deleting comment by ID: ", err);

        response = await HttpResponse.serverError();
        return response;
    }
};
