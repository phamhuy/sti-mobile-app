import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/app/services/auth.service';
import { User } from 'nativescript-plugin-firebase';
import { CheckAccountResponse } from '~/app/models/check-account-response.model';
import { RegisterResponse } from '~/app/models/register-response.model';
import { DialogService } from '~/app/services/dialog.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  isLoggingIn: boolean;
  phoneNumber: string = '';
  lastFourSSN: string;

  constructor(
    private router: RouterExtensions,
    private authService: AuthService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.isLoggingIn = true;
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/main'], { clearHistory: true });
    }
    this.isLoggingIn = false;
  }

  logIn() {
    this.isLoggingIn = true;
    this.phoneNumber = '9492231000';
    this.lastFourSSN = '4375'

    // Check if user exist in sti
    this.authService.checkStiAccount(this.phoneNumber, this.lastFourSSN).subscribe((res: CheckAccountResponse) => {
      if (res.exist) {
        // Login to firebase
        this.authService.logIn(this.phoneNumber, 'The received verification code').then(
          (res: User) => {
            if (true || res.additionalUserInfo && res.additionalUserInfo.isNewUser) {
              this.authService.registerMobileAccount(this.phoneNumber).subscribe((res: RegisterResponse) => {
                if (res.success) {
                  this.dialogService.alert('Register', 'Register Successfully');
                }
              }, err => {
                this.dialogService.alert('Error!', 'Unable to register! Please contact Customer Service');
              }, () => {
                this.isLoggingIn = false;
              });
            }
            this.router.navigate(['/main'], { clearHistory: true });
          },
          err => {
            this.dialogService.alert('Error!', 'Invalid Verification Code. Please try again.');
            this.isLoggingIn = false;
          }
        );
      } else {
        this.dialogService.alert('Error!', 'Account does not exist. The phone number and the last four SSN do not match.\nPlease contact customer service at (949)555-1234.');
        this.isLoggingIn = false;
      }
    });


  }

}
