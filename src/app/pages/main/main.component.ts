import { Component, OnInit } from '@angular/core';
import { isAndroid } from "tns-core-modules/platform";
import { Router } from '@angular/router';

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './main.css'],
  moduleId: module.id,
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    this.router.navigate(['/main', {
      outlets: {
        homeTab: 'home',
        transactionsTab: 'transactions',
        scanTab: 'scan',
        debtsTab: 'debts',
        profileTab: 'profile'
      }
    }]);
  }

  ngOnInit() {
  }

  getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

    return iconPrefix + icon;
  }

}
