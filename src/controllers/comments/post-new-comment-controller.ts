import { Request, Response } from "express";
import { insertNewCommentService } from "../../services/comments/post-new-comment-service";
import { CommentsModel } from "../../models/comments-model";

export const insertNewCommentController = async (
    req: Request,
    res: Response
) => {
    const postId = parseInt(req.params.id);
    const bodyContent: Partial<CommentsModel> = req.body;

    const httpResponse = await insertNewCommentService(postId, bodyContent);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
