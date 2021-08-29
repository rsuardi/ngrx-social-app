import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginRequest, LoginSuccessResponse, LogoutSuccessResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API: {
    login?: { url: string, method: string },
  };

  constructor(
    private http: HttpClient
  ) {
    this.API = {
      login: { url: '/someurl', method: 'post' }
    }
  }

  login(credentials: LoginRequest): Observable<LoginSuccessResponse> {
    return this.http.post<LoginSuccessResponse>(this.API.login.url, credentials).pipe(catchError((error) => throwError(error.message)));
  }

  logout(): Observable<LogoutSuccessResponse> {
    return this.http.post<LogoutSuccessResponse>(this.API.login.url, {}).pipe(catchError((error) => throwError(error.message)));
  }
}
