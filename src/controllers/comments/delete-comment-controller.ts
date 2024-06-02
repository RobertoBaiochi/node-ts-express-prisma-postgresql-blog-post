import { Request, Response } from "express";
import { deleteCommentService } from "../../services/comments/delete-comment-service";

export const deleteCommentController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await deleteCommentService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
