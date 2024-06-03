import { PostModel } from "../../models/posts-model";
import { updatePostByIdRepository } from "../../repositories/posts/update-post-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const updatePostByIdService = async (
    id: number,
    post: Partial<PostModel>
) => {
    let response = null;

    try {
        const { author, tags, text, title, description } = post;

        if (!id || !author || !tags || !text || !title || !description) {
            response = await HttpResponse.badRequest();
            return response;
        }

        const data = await updatePostByIdRepository(id, post);

        response = await HttpResponse.ok(data);

        return response;
    } catch (err) {
        console.error("Error updating post by ID: ", err);

        response = await HttpResponse.serverError();
        return response;
    }
};
