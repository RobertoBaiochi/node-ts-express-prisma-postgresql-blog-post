import { Request, Response } from "express";
import { getFilteredPostsService } from "../../services/posts/get-posts-filter-service";

export const getFilteredPostsController = async (
    req: Request,
    res: Response
) => {
    const httpResponse = await getFilteredPostsService(req);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
