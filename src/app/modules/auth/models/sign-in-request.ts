import { ErrorResponse, SuccessResponse } from "../../shared/models";

export class SignInRequest {
    username: string;
    password: string;
}

export class SignInSuccessResponse extends SuccessResponse {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    __v: number;
    token: string;
}

export class SignInErrorResponse extends ErrorResponse {

}