import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../services/local-storage.service';
import * as AuthActions from '../../../auth/redux';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showAccountDropDown: boolean = false;

  constructor(
    private store: Store<{ auth: any }>,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.subscribeToSignOutResponse();
  }

  signOut() {
    this.store.dispatch(new AuthActions.SignOut());
  }

  subscribeToSignOutResponse(): void {
    this.store.select(state => state.auth).subscribe(auth => {
      if (auth && auth.user == null && auth.remove_token) {
        this.localStorageService.removeItem("token");
        this.router.navigate(['/']);
      }
    }, error => {
      console.log(error);
    });
  }

  setThemeToLocalStorage() {
    let t = 'light';
    const theme = localStorage.getItem('theme');
    if (theme && theme == 'undefined' || theme == 'dark') t = 'light';
    else t = 'dark';
    window.localStorage.setItem("theme", t), $("#friendkit-demo-landing").length || ("dark" === t ? $("body").addClass("is-dark") : $("body").removeClass("is-dark"))
  }
}
