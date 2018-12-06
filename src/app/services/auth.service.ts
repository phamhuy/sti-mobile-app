import { Injectable } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;
  cachedIDToken: string;

  constructor() { }

  logIn(phoneNumber: string, verificationPrompt: string) {
    return firebase.login({
      type: firebase.LoginType.PHONE,
      phoneOptions: {
        phoneNumber: `+1${phoneNumber}`,
        verificationPrompt: verificationPrompt
      }
    }).then(
      res => {
        this.isLoggedIn = true;
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

  signOut() {
    return firebase.logout();
  }

}
