import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SignInRequest, SignInSuccessResponse, SignOutSuccessResponse, SignUpRequest, SignUpSuccessResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API: {
    signIn?: { url: string, method: string },
    signOut?: { url: string, method: string },
    signUp?: { url: string, method: string },
  };

  constructor(
    private http: HttpClient
  ) {
    this.API = {
      signIn: { url: '/sign-in', method: 'post' },
      signOut: { url: '/sign-out', method: 'post' },
      signUp: { url: '/sign-up', method: 'post' },
    }
  }

  signIn(credentials: SignInRequest): Observable<SignInSuccessResponse> {
    return this.http.post<SignInSuccessResponse>(this.API.signIn.url, credentials).pipe(catchError((error) => throwError(error.message)));
  }

  signOut(): Observable<SignOutSuccessResponse> {
    return this.http.post<SignOutSuccessResponse>(this.API.signOut.url, {}).pipe(catchError((error) => throwError(error.message)));
  }

  signUp(request: SignUpRequest): Observable<SignUpSuccessResponse> {
    return this.http.post<SignUpSuccessResponse>(this.API.signUp.url, request).pipe(catchError((error) => throwError(error.message)));
  }
}
