import { Action } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { User } from './models/user';

export class GetUser implements Action {
    readonly type = ActionTypes.GET_USER;
}

export class GetUserSuccess implements Action {
    readonly type = ActionTypes.GET_USER_SUCCESS;
    constructor(public payload: Array<User>) { }
}

export class GetUserFailed implements Action {
    readonly type = ActionTypes.GET_USER_FAILED;
    constructor(public payload: string) { }
}

export type UserActions =
    GetUser
    | GetUserSuccess
    | GetUserFailed;