import prismaClient from "../../../prismaCliente";
import { PostModel } from "../../models/posts-model";

export const findAllPosts = async (): Promise<PostModel[]> => {
    const data = await prismaClient.post.findMany({
        select: {
            id: true,
            author: true,
            description: true,
            createdAt: true,
            tags: true,
            text: true,
            title: true,
            updatedAt: true,
            comment: true,
        },
    });

    return data;
};
