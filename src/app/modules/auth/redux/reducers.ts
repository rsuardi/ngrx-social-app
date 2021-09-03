
import { SignInErrorResponse, SignInSuccessResponse } from "../models";
import { AuthActions as Actions } from "./actions";
import { AuthActionTypes as ActionTypes } from './actionTypes';

export const initialState: {
    loading: boolean,
    user?: null,
    is_authenticated: boolean,
    error?: null,
} = {
    loading: true,
    user: null,
    is_authenticated: false
};

export const AuthReducer = (state = initialState, action: Actions) => {

    switch (action.type) {
        case ActionTypes.SIGN_IN:
            return {
                ...state,
                loading: true,
                is_authenticated: false
            }
        case ActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                is_authenticated: false
            }
        case ActionTypes.SIGN_IN_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload,
                is_authenticated: false
            }
        case ActionTypes.SIGN_OUT:
            return {
                ...state,
                loading: true,
                is_authenticated: true
            }
        case ActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: null,
                is_authenticated: false,
                remove_token: true
            }
        case ActionTypes.SIGN_OUT_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                is_authenticated: true
            }
        case ActionTypes.SIGN_UP:
            return {
                ...state,
                loading: true,
                is_authenticated: false
            }
        case ActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                is_authenticated: true
            }
        case ActionTypes.SIGN_UP_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload,
                is_authenticated: false
            }
        default:
            return state;
    }
}