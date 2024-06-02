import { findPostByIdRepository } from "../../repositories/posts/find-post-by-id-repository";
import * as HttpResponse from "../../utils/http-helper";

export const findPostByIdService = async (id: number) => {
    let response = null;

    const data = await findPostByIdRepository(id);

    if (!data) {
        response = await HttpResponse.noContent();
        return response;
    }

    response = await HttpResponse.ok(data);

    return response;
};
