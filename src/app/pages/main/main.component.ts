import { Component, OnInit } from '@angular/core';
import { isAndroid } from "tns-core-modules/platform";
import { Router } from '@angular/router';
import { TabService } from '~/app/services/tab.service';

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './main.css'],
  moduleId: module.id,
  providers: [TabService]
})
export class MainComponent implements OnInit {
  tabSelectedIndex: number = 3;

  constructor(
    private router: Router,
    private tabService: TabService
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
    this.tabService.tabChangedSource$.subscribe(newIndex => {
      this.tabSelectedIndex = newIndex;
    })
  }

  getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

    return iconPrefix + icon;
  }

}
