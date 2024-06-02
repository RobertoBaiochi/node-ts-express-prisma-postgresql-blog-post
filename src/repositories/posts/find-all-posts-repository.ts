import { PostModel } from "../../models/posts-model";
import prismaClient from "../../prismaClient";

export const findAllPosts = async (): Promise<PostModel[]> => {
    const whereClause: any = {};

    const data = await prismaClient.post.findMany({
        where: whereClause,
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
