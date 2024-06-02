import prismaClient from "../../prismaClient";

export const filterPostByQuery = async (query: string) => {
    const data = await prismaClient.post.findMany({
        where: {
            OR: [
                { author: { contains: query, mode: "insensitive" } },
                { title: { contains: query, mode: "insensitive" } },
                { text: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
                {
                    tags: {
                        hasSome: query.split(",").map((tag) => tag.trim()),
                    },
                },
            ],
        },
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
