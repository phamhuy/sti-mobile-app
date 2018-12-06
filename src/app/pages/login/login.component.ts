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
  phoneNumber: string = '';
  ssn: string; // Last 4 SSN digits

  constructor(
    private router: RouterExtensions,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoggingIn = true;
    this.authService.getCurrentUser().then(
      user => {
        if (!!user) {
          this.router.navigate(['/main'], { clearHistory: true });
        }
      },
      err => { }
    );
    this.isLoggingIn = false;
  }

  logIn() {
    this.isLoggingIn = true;
    this.phoneNumber = '9495551234';
    this.authService.logIn(this.phoneNumber, 'The received verification code').then(
      res => {
        this.isLoggingIn = false;
        this.router.navigate(['/main'], { clearHistory: true });
      },
      err => {
        this.isLoggingIn = false;
      }
    );
  }

}
