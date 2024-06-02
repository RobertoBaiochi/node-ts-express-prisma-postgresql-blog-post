import { PostModel } from "../../models/posts-model";
import { createNewPost } from "../../repositories/posts/create-new-post-repository";
import * as HttpResponse from "../../utils/http-helper";

export const insertNewPostService = async (newPost: PostModel) => {
    const { author, description, tags, text, title } = newPost;
    let response = null;

    if (!author && !description && !tags && !text && !title) {
        response = await HttpResponse.badRequest();
        return response;
    }

    try {
        await createNewPost(newPost);
        response = await HttpResponse.created();
        return response;
    } catch (error) {
        response = await HttpResponse.badRequest();
        return response;
    }
};
