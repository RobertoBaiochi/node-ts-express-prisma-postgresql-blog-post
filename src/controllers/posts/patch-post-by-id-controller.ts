import { Request, Response } from "express";
import { updatePostByIdService } from "../../services/posts/patch-post-by-id-service";
import { PostModel } from "../../models/posts-model";

export const updatePostByIdController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyContent: Partial<PostModel> = req.body;

    const httpResponse = await updatePostByIdService(id, bodyContent);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
