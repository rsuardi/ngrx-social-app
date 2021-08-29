import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './modules/post/components/add-post/add-post.component';
import { ListPostsComponent } from './modules/post/components/list-posts/list-posts.component';


const routes: Routes = [
  {
    path: 'some',
    component: ListPostsComponent
  },
  {
    path: 'another',
    component: AddPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
