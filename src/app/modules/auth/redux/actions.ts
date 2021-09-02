import { Action } from '@ngrx/store';
import {
    SignInErrorResponse, SignInRequest, SignInSuccessResponse, SignOutErrorResponse, SignOutSuccessResponse
} from '../models';
import { SignUpErrorResponse, SignUpRequest, SignUpSuccessResponse } from '../models/sign-UP-request';
import { AuthActionTypes as ActionTypes } from './actionTypes';


export class SignIn implements Action {
    readonly type = ActionTypes.SIGN_IN;
    public constructor(public payload: SignInRequest) { }
}

export class SignInSuccess implements Action {
    readonly type = ActionTypes.SIGN_IN_SUCCESS;
    public constructor(public payload: SignInSuccessResponse) { }
}

export class SignInError implements Action {
    readonly type = ActionTypes.SIGN_IN_ERROR;
    public constructor(public payload: SignInErrorResponse) { }
}

//--------------------------------------------------------------------------------------

export class SignOut implements Action {
    readonly type = ActionTypes.SIGN_OUT;
}

export class SignOutSuccess implements Action {
    readonly type = ActionTypes.SIGN_OUT_SUCCESS;
    public constructor(public payload: SignOutSuccessResponse) { }
}

export class SignOutError implements Action {
    readonly type = ActionTypes.SIGN_OUT_ERROR;
    public constructor(public payload: SignOutErrorResponse) { }
}


//--------------------------------------------------------------------------------------

export class SignUp implements Action {
    readonly type = ActionTypes.SIGN_UP;
    public constructor(public payload: SignUpRequest) { }
}

export class SignUpSuccess implements Action {
    readonly type = ActionTypes.SIGN_UP_SUCCESS;
    public constructor(public payload: SignUpSuccessResponse) { }
}

export class SignUpError implements Action {
    readonly type = ActionTypes.SIGN_UP_ERROR;
    public constructor(public payload: SignUpErrorResponse) { }
}


//--------------------------------------------------------------------------------------

export type AuthActions = SignIn
    | SignInSuccess
    | SignInError
    | SignOut
    | SignOutSuccess
    | SignOutError
    | SignUp
    | SignUpSuccess
    | SignUpError