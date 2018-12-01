import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  makeDeposit() {
    this.router.navigate(['/main', {outlets: { homeTab: 'make-deposit'}}]);
  }

  depositHistory() {
    this.router.navigate(['/deposit-history']);
  }

}
