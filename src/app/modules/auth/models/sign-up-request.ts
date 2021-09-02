import { ErrorResponse, SuccessResponse } from "../../shared/models";

export interface SignUpRequest {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
}

export class SignUpSuccessResponse extends SuccessResponse {

}

export class SignUpErrorResponse extends ErrorResponse {

}