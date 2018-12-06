import { Injectable } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import { isAndroid } from "tns-core-modules/platform";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = !isAndroid;
  redirectUrl: string;
  cachedIDToken: string;

  constructor() { }

  logIn(phoneNumber: string, verificationPrompt: string): Promise<any> {
    if (!isAndroid) {
      this.isLoggedIn = true;
      return Promise.resolve(true);
    }
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
    this.isLoggedIn = false;
    return firebase.logout();
  }

}
