import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { SignInRequest, SignInSuccessResponse, SignOutSuccessResponse, SignUpRequest, SignUpSuccessResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API: {
    signIn?: { url: string, method: string },
    signUp?: { url: string, method: string },
  };

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private localStorageService: LocalStorageService
  ) {
    this.API = {
      signIn: { url: '/sign-in', method: 'post' },
      signUp: { url: '/sign-up', method: 'post' },
    }
  }

  signIn(credentials: SignInRequest): Observable<SignInSuccessResponse> {
    return this.http.post<SignInSuccessResponse>(this.API.signIn.url, credentials).pipe(catchError((error) => throwError(error.message)));
  }

  signOut(): void {
    //TODO DISPATCH A SIGN_OUT ACTION FROM HERE 
  }

  signUp(request: SignUpRequest): Observable<SignUpSuccessResponse> {
    return this.http.post<SignUpSuccessResponse>(this.API.signUp.url, request).pipe(catchError((error) => throwError(error.message)));
  }

  isAuthenticated(): boolean {
    const token = this.localStorageService.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
