import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient } from '@angular/common/http';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { EffectsModule } from '@ngrx/effects';
import { PostReducer, PostEffects } from './'

@NgModule({
    declarations: [
        AddPostComponent,
        ListPostsComponent
    ],
    imports: [
        CommonModule,
        HttpClient,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        // StoreModule.forRoot({}),
        // StoreModule.forFeature('post', PostReducer),
        // EffectsModule.forRoot([]),
        // EffectsModule.forFeature([PostEffects])
    ],
    providers: [],
})
export class PostModule { }