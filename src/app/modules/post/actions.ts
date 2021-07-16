import { Action } from '@ngrx/store';
import { PostActionTypes as ActionTypes } from './actionTypes';
import {
    LoadPostSuccessResponse,
    LoadPostErrorResponse,
    GetPostSuccessRequest,
    GetPostErrorResponse,
    AddPostSuccessRequest,
    AddPostErrorResponse,
    DeletePostSuccessRequest,
    DeletePostErrorResponse
} from './services/models';


export class LoadPosts implements Action {
    readonly type = ActionTypes.LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
    readonly type = ActionTypes.LOAD_POSTS_SUCCESS;
    public constructor(public payload: LoadPostSuccessResponse) { }
}

export class LoadPostsError implements Action {
    readonly type = ActionTypes.LOAD_POSTS_ERROR;
    public constructor(public payload: LoadPostErrorResponse) { }
}

//--------------------------------------------------------------------------------------

export class GetPost implements Action {
    readonly type = ActionTypes.GET_POST;
}

export class GetPostSuccess implements Action {
    readonly type = ActionTypes.GET_POST_SUCCESS;
    public constructor(public payload: GetPostSuccessRequest) { }
}

export class GetPostError implements Action {
    readonly type = ActionTypes.GET_POST_ERROR;
    public constructor(public payload: GetPostErrorResponse) { }
}


//--------------------------------------------------------------------------------------

export class AddPost implements Action {
    readonly type = ActionTypes.ADD_POST;
}

export class AddPostSuccess implements Action {
    readonly type = ActionTypes.ADD_POST_SUCCESS;
    public constructor(public payload: AddPostSuccessRequest) { }
}

export class AddPostError implements Action {
    readonly type = ActionTypes.ADD_POST_ERROR;
    public constructor(public payload: AddPostErrorResponse) { }
}

//--------------------------------------------------------------------------------------


export class EditPost implements Action {
    readonly type = ActionTypes.EDIT_POST;
}

export class EditPostSuccess implements Action {
    readonly type = ActionTypes.EDIT_POST_SUCCESS;
    public constructor(public payload: AddPostSuccessRequest) { }
}

export class EditPostError implements Action {
    readonly type = ActionTypes.EDIT_POST_ERROR;
    public constructor(public payload: AddPostErrorResponse) { }
}

//--------------------------------------------------------------------------------------

export class DeletePost implements Action {
    readonly type = ActionTypes.DELETE_POST;
}

export class DeletePostSuccess implements Action {
    readonly type = ActionTypes.DELETE_POST_SUCCESS;
    public constructor(public payload: DeletePostSuccessRequest) { }
}

export class DeletePostError implements Action {
    readonly type = ActionTypes.DELETE_POST_ERROR;
    public constructor(public payload: DeletePostErrorResponse) { }
}

//--------------------------------------------------------------------------------------

export type PostActions = LoadPosts
    | LoadPostsSuccess
    | LoadPostsError
    | GetPost
    | GetPostSuccess
    | GetPostError
    | AddPost
    | AddPostSuccess
    | AddPostError
    | EditPost
    | EditPostSuccess
    | EditPostError
    | DeletePost
    | DeletePostSuccess
    | DeletePostError;