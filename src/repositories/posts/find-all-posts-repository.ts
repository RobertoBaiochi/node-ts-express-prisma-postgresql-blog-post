import { PostModel } from "../../models/posts-model";
import prismaClient from "../../prismaClient";

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
            comment: {
                orderBy: {
                    createdAt: "asc",
                },
                select: {
                    comment: true,
                    createdAt: true,
                    id: true,
                    name: true,
                    postId: true,
                },
            },
        },
    });

    return data;
};
