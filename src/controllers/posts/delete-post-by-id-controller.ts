import { Request, Response } from "express";
import { deletePostByIdService } from "../../services/posts/delete-post-by-id-service";

export const deletePostByIdController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await deletePostByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
