import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoadPostErrorResponse, LoadPostSuccessResponse } from "../models";
import { PostService } from "../services/post.service";
import { LoadPostsError, LoadPostsSuccess } from "./actions";
import { PostActionTypes } from "./actionTypes";

@Injectable()
export class PostEffects {
    constructor(
        private actions$: Actions,
        private postService: PostService
    ) { }

    @Effect()
    getPosts$ = this.actions$.pipe(
        ofType(PostActionTypes.LOAD_POSTS),
        switchMap(() =>
            this.postService.getPosts().pipe(
                map((posts: LoadPostSuccessResponse[]) => new LoadPostsSuccess(posts)),
                catchError((error: LoadPostErrorResponse) => of(new LoadPostsError(error)))
            )
        )
    );

}