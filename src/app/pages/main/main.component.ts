import { Component, OnInit } from '@angular/core';
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import { Router, ActivatedRoute } from '@angular/router';
import { TabService } from '~/app/services/tab.service';
import { SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { EventData, ContentView, Color } from 'tns-core-modules/ui/page/page';
import { Label } from 'tns-core-modules/ui/label';

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './main.css'],
  moduleId: module.id,
  providers: [TabService]
})
export class MainComponent implements OnInit {
  selectedTabIndex: number = 2;
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
    private activatedRoute: ActivatedRoute,
  ) { }

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
    const iconPrefix = isAndroid ? 'res://' : 'res://tabIcons/';

    return iconPrefix + icon;
  }

  onSelectedIndexChanged(event: SelectedIndexChangedEventData) {
  }

  onTabViewLoaded(event: EventData) {
    const tabView = <any>event.object;
    const notifIndex = 4;
    const count = 1 - 0;

    if (isIOS && count) {
      const notifView = tabView.ios.tabBar.items[notifIndex];
      notifView.badgeValue = count.toString();
    }

    if (isAndroid && count) {
      const nativeTabView = tabView._tabLayout.getChildAt(0);

      // Create badge label
      const label = new Label();
      label.text = count.toString();
      label.fontSize = 12;
      label.verticalAlignment = 'middle';
      label.horizontalAlignment = 'center';
      label.color = new Color('white');

      // Create badge view container
      const badgeView = new ContentView();
      badgeView.backgroundColor = 'red';
      badgeView.width = 20;
      badgeView.height = 20;
      badgeView.borderColor = 'red';
      badgeView.borderRadius = 15;
      badgeView.marginTop = -40;
      badgeView.marginRight = -17;

      // Add the badge label to badge view container
      badgeView.content = label;
      (<any>badgeView)._inheritStyleScope((<any>tabView)._styleScope);
      badgeView._setupUI(tabView._context);
      badgeView.onLoaded();

      // Add the badge view container to the notifView
      setTimeout(() => {
        const notifView = nativeTabView.getChildAt(notifIndex);
        notifView.addView(badgeView.nativeView);
      }, 0);
    }
  }

  goToProfile() {
    // Using the stack route from tab service:
    // const routeIndex = this.outletToRouteIndex['homeTab'];
    // const curPath = this.activatedRoute.children[routeIndex].routeConfig.path || 'home';
    // this.tabService.routeStack.push({ tabIndex: 0, path: curPath });

    // this.router.navigate(['/main', { outlets: { homeTab: 'profile' } }]);
    // this.selectedTabIndex = 0;
  }

  goBack() {
    // const route = this.tabService.routeStack.pop();
    // const outlets = {};
    // outlets[this.tabIndexToOutlet[route.tabIndex]] = route.path;
    // this.selectedTabIndex = route.tabIndex;
    // this.router.navigate(['/main', { outlets: outlets }]);
  }

}
