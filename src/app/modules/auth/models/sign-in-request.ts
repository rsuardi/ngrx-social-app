import { ErrorResponse, SuccessResponse } from "../../shared/models";

export class SignInRequest {
    username: string;
    password: string;
}

export class SignInSuccessResponse extends SuccessResponse {

}

export class SignInErrorResponse extends ErrorResponse {

}