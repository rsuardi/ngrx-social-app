import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherIconsModule
  ],
  exports: [
    FeatherIconsModule
  ]
})
export class IconsModule { }
