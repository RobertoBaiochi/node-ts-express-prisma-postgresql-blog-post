import { Request, Response } from "express";
import { getAllPostsService } from "../../services/posts/get-all-posts-service";

export const getAllPostsController = async (req: Request, res: Response) => {
    const httpResponse = await getAllPostsService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
