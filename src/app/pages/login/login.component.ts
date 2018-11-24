import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as firebase from 'nativescript-plugin-firebase';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  isLoggingIn: boolean;

  constructor(
    private router: RouterExtensions
  ) { }

  ngOnInit() {
    this.isLoggingIn = false;
  }

  logIn() {
    this.isLoggingIn = true;
    firebase.login({
        type: firebase.LoginType.PHONE,
        phoneOptions: {
          phoneNumber: '+19495551234',
          verificationPrompt: "The received verification code" // default "Verification code"
        }
      }).then(
        result => {
          this.isLoggingIn = false;
          console.log('successfully log in\n', result);
          this.router.navigate(['/home'], { clearHistory: true });
        },
        err => {
          this.isLoggingIn = false;
          console.log('error =', err);
        }
      )
  }

}
