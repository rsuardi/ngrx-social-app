import { ErrorResponse, SuccessResponse } from "../../shared/services/models";

export class LoginRequest {
    username: string;
    password: string;
}

export class LoginSuccessResponse extends SuccessResponse {

}

export class LoginErrorResponse extends ErrorResponse {

}