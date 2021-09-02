import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const requiresLogin = next.data.requiresLogin || false;

    if (requiresLogin) {
      if (this.auth.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    }

    return true;
  }

}

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/core/feed']);
      return false;
    }
    //this.router.navigate(['/core/feed']);
    return true;
  }

}

