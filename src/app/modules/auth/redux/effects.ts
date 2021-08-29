import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
    LoginErrorResponse,
    LoginRequest,
    LoginSuccessResponse,
    LogoutErrorResponse, LogoutSuccessResponse
} from "../models";
import { AuthService } from "../services";
import { LoginError, LoginSuccess, LogoutError, LogoutSuccess } from "./actions";
import { AuthActionTypes } from "./actionTypes";

@Injectable()
export class PostEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }

    @Effect()
    login$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN),
        switchMap((actionPayload: LoginRequest) =>
            this.authService.login(actionPayload).pipe(
                map((payload: LoginSuccessResponse) => new LoginSuccess(payload)),
                catchError((error: LoginErrorResponse) => of(new LoginError(error)))
            )
        )
    );

    @Effect()
    logout$ = this.actions$.pipe(
        ofType(AuthActionTypes.LOGOUT),
        switchMap(() =>
            this.authService.logout().pipe(
                map((payload: LogoutSuccessResponse) => new LogoutSuccess(payload)),
                catchError((error: LogoutErrorResponse) => of(new LogoutError(error)))
            )
        )
    );
}