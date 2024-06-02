import prismaClient from "../../prismaClient";

export const deletePlayerByidRepository = async (id: number) => {
    const data = await prismaClient.post.delete({
        where: {
            id,
        },
    });

    return data;
};
