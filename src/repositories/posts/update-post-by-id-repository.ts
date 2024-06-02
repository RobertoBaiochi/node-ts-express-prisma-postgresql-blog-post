import { PostModel } from "../../models/posts-model";
import prismaClient from "../../prismaClient";

export const updatePostByIdRepository = async (
    id: number,
    post: Partial<PostModel>
) => {
    const data: Partial<PostModel> = await prismaClient.post.update({
        where: {
            id,
        },
        data: {
            author: post.author,
            title: post.title,
            tags: post.tags,
            text: post.text,
            description: post.description,
        },
    });

    return data;
};
