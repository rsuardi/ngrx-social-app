import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { SignInSuccessResponse } from '../../models';
import * as AuthActions from '../../redux';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(
    private store: Store<{ auth: any }>,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.subscribeToSignInSuccessResponse();
    this.initSignInForm();
  }

  initSignInForm(): void {
    this.signInForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    let formData = this.signInForm.value;
    this.store.dispatch(new AuthActions.SignIn(formData));
  }

  subscribeToSignInSuccessResponse(): void {
    this.store.select(state => state.auth).subscribe(_state => {
      if (_state && _state.user && _state.user.token) {
        this.localStorageService.setItem("token", _state.user.token);
        this.router.navigate(['/core/feed']);
      }
    }, error => {
      console.log(error);
    });
  }
}
