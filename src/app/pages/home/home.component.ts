import { Component, OnInit } from '@angular/core';
import { CardActionFunction } from '~/app/components/card/card.component';
import { TabService } from '~/app/services/tab.service';
import { MobileService } from '~/app/services/mobile.service';
import { DebtAccountSummary } from '~/app/models/debt-account.model';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  accountSummary = {
    'Saving Balance': '$9000.00',
    'Enrolled Debts': '$10,000.00',
    'In Progress': '$8000.00',
    'Paid/Completed': '$500'
  }


  debtAccounts: DebtAccountSummary[] = [
    {
      creditorName: 'Bank of America',
      currentBalance: 5664
    },
    {
      creditorName: 'Bank of America',
      currentBalance: 5664
    }
  ]

  debtAction = {
    'Show All Debt Accounts': new CardActionFunction(this, this.goToDebts)
  }

  constructor(
    private tabService: TabService,
    private mobileService: MobileService
  ) { }

  ngOnInit() {
    console.log('home init');
    this.mobileService.getDebtAccountSummary().subscribe(debtAccounts => {
      if (debtAccounts && debtAccounts.length)
        this.debtAccounts = debtAccounts;
    }, err => {
      console.log('Can\'t get debt account summary');
    });

    this.mobileService.getAccountSummary().subscribe(accountSummary => {
      console.log('account summary =', accountSummary);
    }, err => {
      console.log('Can\'t get account summary');
    });
  }

  goToDebts() {
    this.tabService.changeTab(3);
  }

  showDebtDetails() {
    this.tabService.changeTab(3);
  }

}
