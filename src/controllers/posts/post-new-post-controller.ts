import { Request, Response } from "express";
import { insertNewPostService } from "../../services/posts/post-new-post-service";

export const insertNewPostController = async (req: Request, res: Response) => {
    const bodyContent = req.body;
    const httpResponse = await insertNewPostService(bodyContent);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
