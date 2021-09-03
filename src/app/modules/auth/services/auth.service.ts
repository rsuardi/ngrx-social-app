import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, throwError } from 'rxjs';
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
      signIn: { url: '/auth/authenticate', method: 'post' },
      signUp: { url: '/auth/register', method: 'post' },
    }
  }

  signIn(credentials: SignInRequest): Observable<SignInSuccessResponse> {
    return this.http.post<SignInSuccessResponse>(this.API.signIn.url, credentials).pipe(catchError((error) => throwError(error.message)));
  }

  signOut(): Observable<any> {
    //TODO DISPATCH A SIGN_OUT ACTION FROM HERE 
    return of(true);
    //return this.http.post<any>('/auth/sign-out', {}).pipe(catchError((error) => throwError(error.message)));
  }

  signUp(request: SignUpRequest): Observable<SignUpSuccessResponse> {
    return this.http.post<SignUpSuccessResponse>(this.API.signUp.url, request).pipe(catchError((error) => throwError(error.message)));
  }

  isAuthenticated(): boolean {
    let isAuthenticated = false;
    const token = this.localStorageService.getItem('token');
    if (token && token != 'undefined') {
      isAuthenticated = !this.jwtHelper.isTokenExpired(token);
      if (!isAuthenticated) this.localStorageService.removeItem("token");
    }
    return isAuthenticated;
  }
}
