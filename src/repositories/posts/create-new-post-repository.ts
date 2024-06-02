import { PostModel } from "../../models/posts-model";
import prismaClient from "../../prismaCliente";

export const createNewPost = async (newPost: PostModel) => {
    const { author, description, tags, text, title } = newPost;

    await prismaClient.post.create({
        data: {
            title,
            author,
            text,
            tags,
            description,
        },
    });
};
