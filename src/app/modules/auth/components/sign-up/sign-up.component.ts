import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import { SignUpRequest } from '../../models';
import * as AuthActions from '../../redux';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(
    private store: Store<{ auth: any }>,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initSignUpForm();
    this.subscribeToSignUpResponse();
  }

  initSignUpForm() {
    this.signUpForm = new FormGroup({
      first_name: new FormControl(`test first ${Math.floor(Math.random() * 1000)}`, Validators.required),
      last_name: new FormControl(`test last ${Math.floor(Math.random() * 1000)}`, Validators.required),
      email: new FormControl(`testmail${Math.floor(Math.random() * 1000)}@mail.com`, Validators.required),
      username: new FormControl(`username${Math.floor(Math.random() * 1000)}`, Validators.required),
      password: new FormControl('12345', Validators.required),
    });
  }

  onSubmit() {
    let formData = this.signUpForm.value;
    this.store.dispatch(new AuthActions.SignUp(formData));
    this.formSubmitted = true;
  }

  subscribeToSignUpResponse(): void {
    this.store.select(state => state.auth).subscribe(_state => {
      if (this.formSubmitted) {
        if (_state && _state.user && _state.user.token) {
          this.localStorageService.setItem("token", _state.user.token);
          this.router.navigate(['/core/feed']);
        } else {
          alert(`An error occured trying to sign up this user, please try again later`);
        }
      }

    }, error => {
      console.log(error);
    });
  }
}
