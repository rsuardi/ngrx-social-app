import { ErrorResponse, SuccessResponse } from "../../shared/models";

export class DeletePostRequest {
    id: string;
}

export class DeletePostSuccessRequest extends SuccessResponse {

}

export class DeletePostErrorResponse extends ErrorResponse {

}