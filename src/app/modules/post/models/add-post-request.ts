import { ErrorResponse, SuccessResponse } from "../../shared/models";

export class AddPostRequest {
    edit: boolean;
}

export class AddPostSuccessRequest extends SuccessResponse {

}

export class AddPostErrorResponse extends ErrorResponse {

}