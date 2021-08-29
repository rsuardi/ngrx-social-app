import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CoreActionTypes as ActionTypes } from "./actionTypes";
import { CoreService } from '../services/core.service';

@Injectable()
export class CoreEffects {
    constructor(
        private actions$: Actions,
        private coreService: CoreService
    ) { }

    // @Effect()
    // someEffect$ = this.actions$.pipe(
    //     ofType(ActionTypes.SOME_ACTION),
    //     switchMap((actionPayload: SomeClassRequest) =>
    //         this.coreService.someMethod(actionPayload)
    //             .pipe(
    //                 map((payload: SomeClassSuccessResponse) => new SomeClassSuccess(payload)),
    //                 catchError((error: SomeClassErrorResponse) => of(new SomeClassError(error)))
    //             )
    //     )
    // );
}