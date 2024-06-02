import prismaClient from "../../prismaClient";

export const deleteCommentRepository = async (id: number) => {
    const data = await prismaClient.comment.delete({
        where: {
            id,
        },
    });

    return data;
};
