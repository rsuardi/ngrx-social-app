import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private readonly API: {

  };

  constructor(
    private http: HttpClient
  ) {
    this.API = {}
  }
}
