import { Injectable } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var API_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;
  redirectUrl: string;
  cachedIDToken: string;

  constructor(
    private http: HttpClient
  ) { }

  login(phoneNumber: string, verificationPrompt: string): Promise<any> {
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
    return this.http.post<any>(`${API_URL}/MobileAccountCheck`, { phoneNumber: phoneNumber, lastFourSSN: lastFourSSN });
  }

  registerMobileAccount(phoneNumber: string) {
    return this.http.post<any>(`${API_URL}/RegisterMobileAccount`, { phoneNumber: phoneNumber, fireBaseID: this.cachedIDToken });
  }

  signOut() {
    this.isLoggedIn = false;
    return firebase.logout();
  }

}
