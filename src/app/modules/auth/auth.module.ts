import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from "./components/sign-out/sign-out.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
