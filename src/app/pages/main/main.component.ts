import { Component, OnInit } from '@angular/core';
import { isAndroid } from "tns-core-modules/platform";
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { TabService } from '~/app/services/tab.service';
import { SelectedIndexChangedEventData } from 'nativescript-drop-down';

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './main.css'],
  moduleId: module.id,
  providers: [TabService]
})
export class MainComponent implements OnInit {
  selectedTabIndex: number = 0;
  tabIndexToOutlet = {
    0: 'homeTab',
    1: 'transactionsTab',
    2: 'scanTab',
    3: 'debtsTab',
    4: 'notificationsTab'
  }
  tabIndexToDefaultRoute = {
    0: 'home',
    1: 'transactions',
    2: 'scan',
    3: 'debts',
    4: 'notifications'
  }
  outletToRouteIndex; // A dictionary that maps an outlet name to its index in activatedRoute.children

  constructor(
    private router: Router,
    private tabService: TabService,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.navigate(['/main', {
      outlets: {
        homeTab: 'home',
        transactionsTab: 'transactions',
        scanTab: 'scan',
        debtsTab: 'debts',
        notificationsTab: 'notifications'
      }
    }]);
  }

  ngOnInit() {
    // Subscribe to tab change event emitted from a tab
    this.tabService.tabChangedSource$.subscribe(newIndex => {
      this.selectedTabIndex = newIndex;
    });

    // Initialize outletToRouteIndex
    this.outletToRouteIndex = {};
    for (let i in this.activatedRoute.children) {
      this.outletToRouteIndex[this.activatedRoute.children[i].outlet] = i;
    }
  }

  get routeStack() {
    return this.tabService.routeStack.length;
  }

  get curOutlet() {
    return this.tabIndexToOutlet[this.selectedTabIndex];
  }

  getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

    return iconPrefix + icon;
  }

  onSelectedIndexChanged(event: SelectedIndexChangedEventData) {
  }

  goToProfile() {
    const routeIndex = this.outletToRouteIndex[this.curOutlet];
    const curPath = this.activatedRoute.children[routeIndex].routeConfig.path;
    this.tabService.routeStack.push({ tabIndex: this.selectedTabIndex, path: curPath });

    this.router.navigate(['/main', { outlets: { homeTab: 'profile' } }]);
    this.selectedTabIndex = 0;
  }

  goBack() {
    const route = this.tabService.routeStack.pop();
    const outlets = {};
    outlets[this.tabIndexToOutlet[route.tabIndex]] = route.path;
    outlets[this.curOutlet] = this.tabIndexToDefaultRoute[this.selectedTabIndex];
    this.router.navigate(['/main', { outlets: outlets }]);
    this.selectedTabIndex = route.tabIndex;
  }

}
