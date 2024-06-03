import { findAllPosts as findAllPostsRepository } from "../../repositories/posts/find-all-posts-repository";
import * as HttpResponse from "../../utils/http-helper";

export const getAllPostsService = async () => {
    let response = null;

    try {
        const data = await findAllPostsRepository();

        if (data.length === 0) {
            response = await HttpResponse.noContent();
            return response;
        }

        response = await HttpResponse.ok(data);
        return response;
    } catch (err) {
        console.error("Error get all post: ", err);

        response = await HttpResponse.serverError();
        return response;
    }
};
