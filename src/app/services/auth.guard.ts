import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) { return true; }
    this.authService.redirectUrl = state.url;
    return this.authService.getCurrentUser().then(
      async user => {
        this.authService.cachedIDToken = await this.authService.getIDToken();
        return !!user;
      },
      err => {
        this.router.navigate(['/login']);
        return false;
      }
    );
  }
}
