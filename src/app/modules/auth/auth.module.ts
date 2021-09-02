import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from "./components/sign-out/sign-out.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthEffects, AuthReducer } from './redux';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [

  ]
})
export class AuthModule { }
