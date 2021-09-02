import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedComponent } from './components/feed/feed.component';
import { FriendsComponent } from './components/friends/friends.component';


const routes: Routes = [
  {
    path: 'feed',
    component: FeedComponent,
    outlet: 'main-tabs',
  },
  {
    path: 'friends',
    component: FriendsComponent,
    outlet: 'main-tabs'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
