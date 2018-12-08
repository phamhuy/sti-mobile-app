import { Component, OnInit } from '@angular/core';
import { AuthService } from '~/app/services/auth.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { DialogService } from '~/app/services/dialog.service';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  moduleId: module.id,
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: RouterExtensions,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.dialogService.confirm('Sign Out', 'Are you sure you want to sign out?', 'OK', 'Cancel').then(
      res => {
        if (res) {
          this.authService.signOut().then(res => {
            this.router.navigate(['login'], { clearHistory: true });
          });
        }
      }
    )
  }

}
