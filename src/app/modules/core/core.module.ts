import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FeedComponent } from './components/feed/feed.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects, CoreReducer } from './redux';


@NgModule({
  declarations: [DashboardComponent, FeedComponent, FriendsComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('core', CoreReducer),
    EffectsModule.forFeature([CoreEffects]),
  ]
})
export class CoreModule { }
