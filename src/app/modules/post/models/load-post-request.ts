import { ErrorResponse, SuccessResponse } from "../../shared/models";

export class LoadPostRequest {

}

export class LoadPostSuccessResponse extends SuccessResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class LoadPostErrorResponse extends ErrorResponse {

}