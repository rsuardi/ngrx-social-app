import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from './components/sign-out/sign-out.component';



@NgModule({
  declarations: [SignOutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SignOutComponent
  ]
})
export class HeaderModule { }
