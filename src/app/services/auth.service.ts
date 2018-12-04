import { Injectable } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor() { }

  logIn(phoneNumber: string, verificationPrompt: string) {
    return firebase.login({
      type: firebase.LoginType.PHONE,
      phoneOptions: {
        phoneNumber: phoneNumber,
        verificationPrompt: verificationPrompt
      }
    }).then(
      res => {
        this.isLoggedIn = true;
        return res;
      },
      err => {
        this.isLoggedIn = false;
        console.log('error =', err);
        throw err;
      }
    );
  }

  getIDToken() {
    return firebase.getAuthToken({ forceRefresh: false });
  }

}
