import { Injectable } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import { isAndroid } from "tns-core-modules/platform";
import { environment } from '~/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = !isAndroid;
  redirectUrl: string;
  cachedIDToken: string;
  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  logIn(phoneNumber: string, verificationPrompt: string): Promise<any> {
    // For testing ios only, remove in production
    if (!isAndroid) {
      this.isLoggedIn = true;
      return Promise.resolve(true);
    }
    // For testing ios only, remove in production
    console.log('phoneNumber =', phoneNumber);

    return firebase.login({
      type: firebase.LoginType.PHONE,
      phoneOptions: {
        phoneNumber: `+1${phoneNumber}`,
        verificationPrompt: verificationPrompt
      }
    }).then(
      async res => {
        this.isLoggedIn = true;
        this.cachedIDToken = await this.getIDToken();
        console.log('id token =', this.cachedIDToken);
        console.log('cachedIdToken =', this.cachedIDToken);
        return res;
      },
      err => {
        this.isLoggedIn = false;
        console.log('auth service: login error =', err);
        throw err;
      }
    );
  }

  getIDToken() {
    return firebase.getAuthToken({ forceRefresh: false });
  }

  getCurrentUser() {
    return firebase.getCurrentUser();
  }

  checkStiAccount(phoneNumber: string, lastFourSSN: string): Observable<any> {
    console.log('phone =', phoneNumber, lastFourSSN);
    return this.http.post<any>(`${this.baseUrl}/MobileAccountCheck`, { phoneNumber: phoneNumber, lastFourSSN: lastFourSSN });
  }

  registerMobileAccount(phoneNumber: string) {
    return this.http.post<any>(`${this.baseUrl}/RegisterMobileAccount`, { phoneNumber: phoneNumber, fireBaseID: this.cachedIDToken });
  }

  signOut() {
    this.isLoggedIn = false;
    return firebase.logout();
  }

}
