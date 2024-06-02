import prismaClient from "../../prismaClient";

export const findAllComments = async (id: number) => {
    const data = await prismaClient.comment.findUnique({
        where: {
            id,
        },
    });

    return data;
};
