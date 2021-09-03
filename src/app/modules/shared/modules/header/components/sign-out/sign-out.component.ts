import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../../../auth/redux';
import { LocalStorageService } from '../../../../services/local-storage.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(
    private store: Store<{ auth: any }>,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.subscribeToSignOutResponse();
  }

  signOut() {
    const answer = confirm('You sure you want to log out?');
    if (answer) {
      this.store.dispatch(new AuthActions.SignOut());
    }
  }

  subscribeToSignOutResponse(): void {
    this.store.select(state => state.auth).subscribe(auth => {
      if (auth && auth.user == null && !auth.is_authenticated) {
        //this.localStorageService.removeItem("token");
        this.router.navigate(['/']);
      }
    }, error => {
      console.log(error);
    });
  }

}
