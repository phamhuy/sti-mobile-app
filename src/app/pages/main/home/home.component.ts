import { Component, OnInit } from '@angular/core';
import { TabService } from '~/app/services/tab.service';
import { MobileService } from '~/app/services/mobile.service';
import { DebtAccountSummary } from '~/app/models/debt-account.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.css'],
})
export class HomeComponent implements OnInit {
  isLoadingAccountSummary: boolean = true;
  isLoadingDebtAccountSummary: boolean = true;

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
    this.mobileService.getAccountSummary()
      .pipe(
        finalize(() => this.isLoadingAccountSummary = false)
      )
      .subscribe(accountSummary => {
      }, err => {
        console.log('Can\'t get account summary');
      });

    this.mobileService.getDebtAccountSummary()
      .pipe(
        finalize(() => this.isLoadingDebtAccountSummary = false)
      )
      .subscribe(debtAccounts => {
        if (debtAccounts && debtAccounts.length)
          this.debtAccounts = debtAccounts;
      }, err => {
        console.log('Can\'t get debt account summary');
      });
  }

  goToDebts() {
    this.tabService.changeTab(3);
  }

  showDebtDetails(debtAccountPk: number) {
    this.tabService.changeTab(3);
    this.tabService.selectDebtAccount(debtAccountPk);
  }

}
