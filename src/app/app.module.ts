import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiInterceptor } from './modules/shared/interceptors/api.interceptor';
import { AuthService } from './modules/auth/services';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { AuthEffects, AuthReducer } from './modules/auth/redux';


export function tokenGetter() {
  return localStorage.getItem("token");
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = environment.production ? [debug] : [];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    // StoreModule.forRoot({}),
    // EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot({}),
    StoreModule.forFeature('auth', AuthReducer, { metaReducers }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      //autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:4200"],
        //disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    JwtHelperService,
    AuthService
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
