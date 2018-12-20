import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';

import { DebtsComponent } from './debts/debts.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ScanComponent } from './scan/scan.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MakeDepositComponent } from './make-deposit/make-deposit.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main.component';
import { SharedModule } from '~/app/shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    TransactionsComponent,
    ScanComponent,
    DebtsComponent,
    NotificationsComponent,
    MakeDepositComponent,
    ProfileComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MainModule { }
