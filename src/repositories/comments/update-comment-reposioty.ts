import { CommentsModel } from "../../models/comments-model";
import prismaClient from "../../prismaClient";

export const updateCommentRepository = async (
    id: number,
    bodyContent: Partial<CommentsModel>
) => {
    const data = await prismaClient.comment.update({
        where: {
            id,
        },
        data: {
            comment: bodyContent.comment,
        },
    });

    return data;
};
