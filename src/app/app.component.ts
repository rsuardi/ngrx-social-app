import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './modules/auth/services';
import { LocalStorageService } from './modules/shared/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ngrx-social-network';

  isAuthenticated$: Observable<boolean>;

  /**
   *
   */
  constructor(
    private authService: AuthService,
    private store: Store<any>,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(authState => authState.is_authenticated);//this.authService.isAuthenticated();
  }
}
