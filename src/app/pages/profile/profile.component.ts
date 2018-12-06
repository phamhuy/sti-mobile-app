import { Component, OnInit } from '@angular/core';
import { AuthService } from '~/app/services/auth.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  moduleId: module.id,
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: RouterExtensions
  ) { }

  ngOnInit() {
  }

  signOut() {
    // TODO: display a popup notifying the user signing out
    this.authService.signOut().then(res => {
      this.router.navigate(['login'], { clearHistory: true });
    });
  }

}
