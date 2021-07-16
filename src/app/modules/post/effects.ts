import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { PostService } from "./services/post.service";
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostActionTypes } from "./actionTypes";
import { LoadPostsError, LoadPostsSuccess } from "./actions";

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
                map((posts) => new LoadPostsSuccess(posts)),
                catchError(error => of(new LoadPostsError(error)))
            )
        )
    );

}