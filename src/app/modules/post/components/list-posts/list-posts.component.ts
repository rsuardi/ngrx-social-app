import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from '../../redux/actions';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css'],
  providers: [

  ]
})
export class ListPostsComponent implements OnInit {

  fieldsDefinition = ['id', 'title']

  posts$: Observable<any[]> = this.store.select(state => state.post.posts);

  constructor(
    public store: Store<{ post: { posts: any[] } }>,
    public router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new PostActions.LoadPosts());
  }

  callService() { }

  go() {
    this.router.navigate(['another'])
  }
}
