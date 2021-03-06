import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
    SignInErrorResponse,
    SignInRequest,
    SignInSuccessResponse,
    SignOutErrorResponse, SignOutSuccessResponse, SignUpErrorResponse, SignUpRequest, SignUpSuccessResponse
} from "../models";
import { AuthService } from "../services";
import { SignInError, SignInSuccess, SignOutError, SignOutSuccess, SignUpError, SignUpSuccess } from "./actions";
import { AuthActionTypes } from "./actionTypes";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }

    @Effect()
    signIn$ = this.actions$.pipe(
        ofType(AuthActionTypes.SIGN_IN),
        switchMap((action: { payload: SignInRequest }) =>
            this.authService.signIn(action.payload)
                .pipe(
                    map((payload: SignInSuccessResponse) => new SignInSuccess(payload)),
                    catchError((error: SignInErrorResponse) => of(new SignInError(error)))
                )
        )
    );

    @Effect()
    signOut$ = this.actions$.pipe(
        ofType(AuthActionTypes.SIGN_OUT),
        switchMap((action) => {
            console.log('action: ', action);

            return this.authService.signOut()
                .pipe(
                    map(() => new SignOutSuccess()),
                    catchError(() => of(new SignOutError()))
                )
        })
    );

    @Effect()
    signUp$ = this.actions$.pipe(
        ofType(AuthActionTypes.SIGN_UP),
        switchMap((action: { payload: SignUpRequest }) =>
            this.authService.signUp(action.payload)
                .pipe(
                    map((payload: SignUpSuccessResponse) => new SignUpSuccess(payload)),
                    catchError((error: SignUpErrorResponse) => of(new SignUpError(error)))
                )
        )
    );
}