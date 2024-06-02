import { Request, Response } from "express";
import { CommentsModel } from "../../models/comments-model";
import { patchCommentService } from "../../services/comments/patch-comment-service";

export const patchCommentController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyContent: Partial<CommentsModel> = req.body;

    const httpResponse = await patchCommentService(id, bodyContent);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
