import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabService } from '~/app/services/tab.service';
import { MobileService } from '~/app/services/mobile.service';
import { Subscription } from 'rxjs';
import { DebtAccountSummary } from '~/app/models/debt-account.model';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[];

  accountSummary = {
    savingBalance: 9000,
    enrolledDebts: 10000,
    inProgress: 8000,
    paid: 500
  }

  debtAccounts: DebtAccountSummary[] = [
    {
      debtAccountPk: 3,
      creditorName: 'Bank of America',
      currentBalance: 5664
    },
    {
      debtAccountPk: 4,
      creditorName: 'Bank of America',
      currentBalance: 5664
    }
  ]

  constructor(
    private tabService: TabService,
    private mobileService: MobileService
  ) { }

  ngOnInit() {
    this.subscriptions = [];
    let subscription = this.mobileService.getAccountSummary().subscribe(accountSummary => {
    }, err => {
      console.log('Can\'t get account summary');
    });
    this.subscriptions.push(subscription);

    subscription = this.mobileService.getDebtAccountSummary().subscribe(debtAccounts => {
      if (debtAccounts && debtAccounts.length)
        this.debtAccounts = debtAccounts;
    }, err => {
      console.log('Can\'t get debt account summary');
    });
    this.subscriptions.push(subscription);
  }

  goToDebts() {
    this.tabService.changeTab(3);
  }

  showDebtDetails(debtAccountPk: number) {
    this.tabService.changeTab(3);
    this.tabService.selectDebtAccount(debtAccountPk);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
