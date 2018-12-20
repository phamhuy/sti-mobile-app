import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MakeDepositComponent } from './make-deposit/make-deposit.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ScanComponent } from './scan/scan.component';
import { DebtsComponent } from './debts/debts.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        outlet: 'homeTab',
        path: '',
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: 'home',
            component: HomeComponent,
          },
          {
            path: 'make-deposit',
            component: MakeDepositComponent
          }
        ]
      },
      {
        outlet: 'transactionsTab',
        path: '',
        component: TransactionsComponent
      },
      {
        outlet: 'scanTab',
        path: '',
        component: ScanComponent
      },
      {
        outlet: 'debtsTab',
        path: '',
        component: DebtsComponent
      },
      {
        outlet: 'notificationsTab',
        path: '',
        component: NotificationsComponent
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class MainRoutingModule { }
