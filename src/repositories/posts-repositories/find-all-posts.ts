import prismaClient from "../../../prismaCliente";

export const findAllPosts = async () => {
    const data = await prismaClient.post.findMany({
        select: {
            title: true,
            author: true,
            description: true,
            tags: true,
            text: true,
            comment: true,
        },
    });

    return data;
};
