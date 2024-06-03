import { deletePlayerByidRepository } from "../../repositories/posts/delete-post-by-id-repository";
import { findPostByIdRepository } from "../../repositories/posts/find-post-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const deletePostByIdService = async (id: number) => {
    let response = null;

    if (!id) {
        response = await HttpResponse.badRequest();
        return response;
    }
    try {
        const idExist = await findPostByIdRepository(id);

        if (!idExist) {
            response = await HttpResponse.badRequest();
            return response;
        }

        const isDelete = await deletePlayerByidRepository(id);

        if (!isDelete) {
            response = await HttpResponse.badRequest();
            return response;
        }

        response = await HttpResponse.ok({ message: "Post Deleted" });

        return response;
    } catch (err) {
        console.error("Error deleting post by ID: ", err);

        response = await HttpResponse.serverError();
        return response;
    }
};
