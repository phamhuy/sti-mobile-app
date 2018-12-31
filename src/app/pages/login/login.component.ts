import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/app/services/auth.service';
import { User } from 'nativescript-plugin-firebase';
import { CheckAccountResponse } from '~/app/models/check-account-response.model';
import { RegisterResponse } from '~/app/models/register-response.model';
import { DialogService } from '~/app/services/dialog.service';
import { Page } from 'tns-core-modules/ui/page/page';
import { Button } from 'tns-core-modules/ui/button';
import { TextField } from 'tns-core-modules/ui/text-field';
declare var API_URL;

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  @ViewChild('loginBtn') loginBtn: ElementRef;
  isLoggingIn: boolean;
  phoneNumber: string = '';
  lastFourSSN: string = '';
  base_url = API_URL;

  constructor(
    private router: RouterExtensions,
    private authService: AuthService,
    private dialogService: DialogService,
    private page: Page
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.isLoggingIn = true;
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/main'], { clearHistory: true });
    }
    this.isLoggingIn = false;
  }

  login() {
    this.isLoggingIn = true;
    const loginBtn = <Button>this.loginBtn.nativeElement;
    loginBtn.isEnabled = false;

    // Check if user exist in sti
    this.authService.checkStiAccount(this.phoneNumber, this.lastFourSSN).subscribe(
      this.firebaseLogIn.bind(this),
      err => {
        this.dialogService.alert('Server Error!', `Unable to connect to the server ${API_URL}!`);
        this.isLoggingIn = false;
        loginBtn.isEnabled = true;
      });
  }

  firebaseLogIn(checkAccountResponse: CheckAccountResponse) {
    const loginBtn = <Button>this.loginBtn.nativeElement;
    if (checkAccountResponse.exist) {
      this.authService.login(this.phoneNumber, 'The received verification code').then(
        (res: User) => {
          if (res.additionalUserInfo && res.additionalUserInfo.isNewUser) {
            this.authService.registerMobileAccount(this.phoneNumber).subscribe((res: RegisterResponse) => {
              if (res.success) {
                this.dialogService.alert('Register', 'Register Successfully');
              }
            }, err => {
              this.dialogService.alert('Error!', 'Unable to register! Please contact Customer Service');
            }, () => {
              this.isLoggingIn = false;
              loginBtn.isEnabled = true;
            });
          }
          this.router.navigate(['/main'], { clearHistory: true });
        },
        err => {
          this.isLoggingIn = false;
          loginBtn.isEnabled = true;
          if (err !== 'Prompt was canceled') {
            this.dialogService.alert('Error!', 'Invalid Verification Code. Please try again.');
          }
        }
      );
    } else {
      this.dialogService.alert('Error!', 'Account does not exist. The phone number and the last four SSN do not match.\nPlease contact customer service at (949)555-1234.');
      this.isLoggingIn = false;
      loginBtn.isEnabled = true;
    }
  }

  validateInput(phoneInput: TextField, ssnInput: TextField) {
    const phoneNumber = phoneInput.text;
    const lastFourSSN = ssnInput.text;
    const phoneRegex = /[0-9]{10}/;
    const lastFourSSNRegex = /[0-9]{4}/;

    const loginBtn = <Button>this.loginBtn.nativeElement;
    loginBtn.isEnabled = phoneRegex.test(phoneNumber) && lastFourSSNRegex.test(lastFourSSN);

    return loginBtn.isEnabled;
  }

}
