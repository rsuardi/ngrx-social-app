
import { PostActions } from "./actions";
import { Post } from "./models/post";
import { PostActionTypes as ActionTypes } from './actionTypes';

export const initialState: {
    loading: boolean,
    posts: []
} = {
    loading: true,
    posts: []
};

export const PostReducer = (state = initialState, action: PostActions) => {

    switch (action.type) {
        case ActionTypes.LOAD_POSTS:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.LOAD_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.posts
            }
        case ActionTypes.LOAD_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                posts: null,
                error: action.payload
            }
        case ActionTypes.GET_POST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.payload
            }
        case ActionTypes.GET_POST_ERROR:
            return {
                ...state,
                loading: false,
                payload: null,
                error: action.payload
            }
        case ActionTypes.ADD_POST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.payload
            }
        case ActionTypes.ADD_POST_ERROR:
            return {
                ...state,
                loading: false,
                payload: null,
                error: action.payload
            }
        case ActionTypes.EDIT_POST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.EDIT_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.payload
            }
        case ActionTypes.EDIT_POST_ERROR:
            return {
                ...state,
                loading: false,
                payload: null,
                error: action.payload
            }
        case ActionTypes.DELETE_POST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.DELETE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                payload: action.payload
            }
        case ActionTypes.DELETE_POST_ERROR:
            return {
                ...state,
                loading: false,
                payload: null,
                error: action.payload
            }
        default:
            return state;
    }
}