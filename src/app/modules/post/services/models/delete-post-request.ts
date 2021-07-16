import { ErrorResponse, SuccessResponse } from "../../../common/services/models";

export class DeletePostRequest {
    id: string;
}

export class DeletePostSuccessRequest extends SuccessResponse {

}

export class DeletePostErrorResponse extends ErrorResponse {

}