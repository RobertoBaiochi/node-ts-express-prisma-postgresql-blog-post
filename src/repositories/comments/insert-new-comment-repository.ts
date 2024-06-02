import prismaClient from "../../prismaClient";

export const insertNewCommentRepository = async (
    postId: number,
    name: string,
    comment: string
) => {
    const data = await prismaClient.comment.create({
        data: {
            name,
            comment,
            postId: postId,
        },
    });

    return data;
};
