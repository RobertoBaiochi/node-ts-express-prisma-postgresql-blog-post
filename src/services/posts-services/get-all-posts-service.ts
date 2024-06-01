import { findAllPosts } from "../../repositories/posts-repositories/find-all-posts";
import * as HttpResponse from "../../utils/http-helper";

export const getAllPostsService = async () => {
    const data = await findAllPosts();
    let response = null;

    if (data.length === 0) {
        response = await HttpResponse.noContent();
        return response;
    }

    response = await HttpResponse.ok(data);
    return response;
};
