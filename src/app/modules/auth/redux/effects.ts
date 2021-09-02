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
        switchMap((actionPayload: SignInRequest) =>
            this.authService.signIn(actionPayload)
                .pipe(
                    map((payload: SignInSuccessResponse) => new SignInSuccess(payload)),
                    catchError((error: SignInErrorResponse) => of(new SignInError(error)))
                )
        )
    );

    // @Effect()
    // signOut$ = this.actions$.pipe(
    //     ofType(AuthActionTypes.SIGN_OUT),
    //     switchMap(() =>
    //         this.authService.signOut()
    //             .pipe(
    //                 map((payload: SignOutSuccessResponse) => new SignOutSuccess(payload)),
    //                 catchError((error: SignOutErrorResponse) => of(new SignOutError(error)))
    //             )
    //     )
    // );

    @Effect()
    signUp$ = this.actions$.pipe(
        ofType(AuthActionTypes.SIGN_UP),
        switchMap((payload: SignUpRequest) =>
            this.authService.signUp(payload)
                .pipe(
                    map((payload: SignUpSuccessResponse) => new SignUpSuccess(payload)),
                    catchError((error: SignUpErrorResponse) => of(new SignUpError(error)))
                )
        )
    );
}