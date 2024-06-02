import prismaClient from "../../prismaCliente";

export const deletePlayerByidRepository = async (id: number) => {
    const data = await prismaClient.post.delete({
        where: {
            id,
        },
    });

    return data;
};
