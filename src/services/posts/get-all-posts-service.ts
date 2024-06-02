import { findAllPosts as findAllPostsRepository } from "../../repositories/posts/find-all-posts-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getAllPostsService = async () => {
    const data = await findAllPostsRepository();
    let response = null;

    if (data.length === 0) {
        response = await HttpResponse.noContent();
        return response;
    }

    response = await HttpResponse.ok(data);
    return response;
};
