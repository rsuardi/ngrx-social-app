import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FeedComponent } from './components/feed/feed.component';
import { FriendsComponent } from './components/friends/friends.component';


@NgModule({
  declarations: [DashboardComponent, FeedComponent, FriendsComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
