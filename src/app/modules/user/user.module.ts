import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        HttpClient,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        //StoreModule.forRoot({})
    ],
    providers: [],
})
export class UserModule { }