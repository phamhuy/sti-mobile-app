import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class MobileInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      body: {
        fireBaseID: this.authService.cachedIDToken,
        phoneNumber: req.body.phoneNumber,
        lastFourSSN: req.body.lastFourSSN
      }
    });
    console.dir('req =', req);
    return next.handle(req);
  }
}