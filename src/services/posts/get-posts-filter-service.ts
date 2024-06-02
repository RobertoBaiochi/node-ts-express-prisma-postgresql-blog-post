import { Request } from "express";
import * as HttpResponse from "../../utils/http-helper";
import { findAllPosts } from "../../repositories/posts/find-all-posts-repository";
import { filterPostByQuery } from "../../repositories/posts/filter-post-by-query";

export const getFilteredPostsService = async (req: Request) => {
    let filter = req.query.filter as string;

    let response = null;

    if (!filter) {
        response = await HttpResponse.noContent();
        return response;
    }

    const data = await filterPostByQuery(filter);

    if (data.length === 0) {
        response = await HttpResponse.noContent();
        return response;
    }

    response = await HttpResponse.ok(data);
    return response;
};
