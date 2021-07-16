import { ErrorResponse, SuccessResponse } from "../../../common/services/models";

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