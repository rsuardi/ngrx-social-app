import { Action, createAction } from '@ngrx/store';
import { AuthActionTypes as ActionTypes } from './actionTypes';
import {
    LoginSuccessResponse,
    LoginErrorResponse,
    LogoutSuccessResponse,
    LogoutErrorResponse,
} from '../models';


export class Login implements Action {
    readonly type = ActionTypes.LOGIN;
}

export class LoginSuccess implements Action {
    readonly type = ActionTypes.LOGIN_SUCCESS;
    public constructor(public payload: LoginSuccessResponse) { }
}

export class LoginError implements Action {
    readonly type = ActionTypes.LOGIN_ERROR;
    public constructor(public payload: LoginErrorResponse) { }
}

//--------------------------------------------------------------------------------------

export class Logout implements Action {
    readonly type = ActionTypes.LOGOUT;
}

export class LogoutSuccess implements Action {
    readonly type = ActionTypes.LOGOUT_SUCCESS;
    public constructor(public payload: LogoutSuccessResponse) { }
}

export class LogoutError implements Action {
    readonly type = ActionTypes.LOGOUT_ERROR;
    public constructor(public payload: LogoutErrorResponse) { }
}


//--------------------------------------------------------------------------------------

export type AuthActions = Login
    | LoginSuccess
    | LoginError
    | Logout
    | LogoutSuccess
    | LogoutError