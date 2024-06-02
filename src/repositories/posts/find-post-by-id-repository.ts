import { PostModel } from "../../models/posts-model";
import prismaClient from "../../prismaCliente";

export const findPostByIdRepository = async (id: number) => {
    const data: Partial<PostModel> = await prismaClient.post.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            updatedAt: true,
            author: true,
            text: true,
            title: true,
            tags: true,
            description: true,
            createdAt: true,
            comment: true,
        },
    });

    return data;
};
