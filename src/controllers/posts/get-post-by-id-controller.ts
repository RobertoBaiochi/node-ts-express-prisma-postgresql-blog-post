import { Request, Response } from "express";
import { findPostByIdService } from "../../services/posts/find-post-by-id-service";

export const getPostByIdController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const httpResponse = await findPostByIdService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};
