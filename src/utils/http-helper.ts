import { HttpResponseModel } from "../models/http-reponse-model";

export const ok = async (data: any): Promise<HttpResponseModel> => {
    return {
        statusCode: 200,
        body: data,
    };
};

export const created = async (): Promise<HttpResponseModel> => {
    return {
        statusCode: 201,
        body: {
            message: "Created Successful",
        },
    };
};

export const noContent = async (): Promise<HttpResponseModel> => {
    return {
        statusCode: 204,
        body: null,
    };
};

export const badRequest = async (): Promise<HttpResponseModel> => {
    return {
        statusCode: 400,
        body: null,
    };
};

export const notFound = async (): Promise<HttpResponseModel> => {
    return {
        statusCode: 404,
        body: null,
    };
};
