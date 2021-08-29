
import { AuthActions as Actions } from "./actions";
import { AuthActionTypes as ActionTypes } from './actionTypes';

export const initialState: {
    loading: boolean,
    user: {}
} = {
    loading: true,
    user: {}
};

export const PostReducer = (state = initialState, action: Actions) => {

    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case ActionTypes.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        case ActionTypes.LOGOUT:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case ActionTypes.LOGOUT_ERROR:
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