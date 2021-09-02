import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedComponent } from './components/feed/feed.component';
import { FriendsComponent } from './components/friends/friends.component';
import { AuthGuard } from './../auth/guards/auth.guard';


const routes: Routes = [
  {
    path: 'feed',
    component: FeedComponent,
    outlet: 'main-tabs',
    canActivate: [AuthGuard]
  },
  {
    path: 'friends',
    component: FriendsComponent,
    outlet: 'main-tabs',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
