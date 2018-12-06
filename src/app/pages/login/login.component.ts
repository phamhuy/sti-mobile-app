import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/app/services/auth.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  isLoggingIn: boolean;

  constructor(
    private router: RouterExtensions,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/main'], { clearHistory: true });
    }
    this.isLoggingIn = false;
  }

  logIn() {
    this.isLoggingIn = true;
    this.authService.logIn('+19495551234', 'The received verification code').then(
      async res => {
        this.isLoggingIn = false;
        console.log('successfully log in\n', res);
        console.log('ID token =', await this.authService.getIDToken());
        this.router.navigate(['/main'], { clearHistory: true });
      },
      err => {
        console.log('error =', err);
        console.log('something wrong');
      }
    );
  }

}
