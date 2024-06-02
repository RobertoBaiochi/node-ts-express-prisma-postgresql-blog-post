import { PostModel } from "../../models/posts-model";
import { updatePostByIdRepository } from "../../repositories/posts/update-post-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const updatePostByIdService = async (
    id: number,
    post: Partial<PostModel>
) => {
    const { author, tags, text, title, description } = post;

    let response = null;

    if (!id || !author || !tags || !text || !title || !description) {
        response = await HttpResponse.badRequest();
        return response;
    }

    const data = await updatePostByIdRepository(id, post);

    response = await HttpResponse.ok(data);

    return response;
};
