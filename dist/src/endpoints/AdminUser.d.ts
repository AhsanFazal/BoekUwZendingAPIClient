import { operations } from "../lib/api";
import { BaseEndpoint } from "./Base";
export declare class AdminUserEndpoint extends BaseEndpoint {
    get(query: operations["getAdminUserCollection"]["parameters"]["query"]): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                _page?: number | undefined;
                _items_per_page?: number | undefined;
                _pagination?: boolean | undefined;
            } | undefined;
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        id?: string | undefined;
                        username?: string | undefined;
                    }[];
                    "application/vnd.api+json": {
                        id?: string | undefined;
                        username?: string | undefined;
                    }[];
                    "text/html": {
                        id?: string | undefined;
                        username?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
    getById(id: string): Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        id?: string | undefined;
                        username?: string | undefined;
                    };
                    "application/vnd.api+json": {
                        id?: string | undefined;
                        username?: string | undefined;
                    };
                    "text/html": {
                        id?: string | undefined;
                        username?: string | undefined;
                    };
                };
            };
            404: {
                content: {};
            };
        };
    }>>;
}
