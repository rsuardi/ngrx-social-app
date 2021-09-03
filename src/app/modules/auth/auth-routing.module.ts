import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard, LoginGuard } from './guards/auth.guard';
import { OutsideAppGuard } from './guards/outside-app.guard';


const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [OutsideAppGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [OutsideAppGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
