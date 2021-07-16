import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from './modules/post/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ngrx-social-network';

  fieldsDefinition = ['id', 'title']

  posts$: Observable<any[]> = this.store.select(state => state.post.posts);

  constructor(public store: Store<{ post: { posts: any[] } }>) { }

  ngOnInit() {
    this.store.dispatch(new PostActions.LoadPosts());
  }

  callService() { }
}
