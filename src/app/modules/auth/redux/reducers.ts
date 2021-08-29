
import { AuthActions as Actions } from "./actions";
import { AuthActionTypes as ActionTypes } from './actionTypes';

export const initialState: {
    loading: boolean,
    user: {}
} = {
    loading: true,
    user: {}
};

export const AuthReducer = (state = initialState, action: Actions) => {

    switch (action.type) {
        case ActionTypes.SIGN_IN:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case ActionTypes.SIGN_IN_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        case ActionTypes.SIGN_OUT:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case ActionTypes.SIGN_OUT_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        case ActionTypes.SIGN_UP:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case ActionTypes.SIGN_UP_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        default:
            return state;
    }
}