import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
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
        phoneNumber: req.body ? req.body.phoneNumber : null,
        lastFourSSN: req.body ? req.body.lastFourSSN : null
      },
      headers: new HttpHeaders({
        fireBaseID: this.authService.cachedIDToken || '',
      })
    });
    return next.handle(req);
  }
}