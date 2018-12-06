import { Component, OnInit } from '@angular/core';
import { CardActionFunction } from '~/app/components/card/card.component';
import { TabService } from '~/app/services/tab.service';
import { MobileService } from '~/app/services/mobile.service';

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

  debtAccounts = [
    {
      creditor: 'Bank of America',
      amount: 5664
    },
    {
      creditor: 'Bank of America',
      amount: 5664
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
  }

  goToDebts() {
    this.tabService.changeTab(3);
  }

  showDebtDetails() {
    this.tabService.changeTab(3);
  }

}
