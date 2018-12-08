import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MobileService } from '~/app/services/mobile.service';
import { DebtAccountDetails, DebtAccountStatus } from '~/app/models/debt-account.model';
import { isAndroid } from "tns-core-modules/platform";

@Component({
  selector: 'ns-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css'],
  moduleId: module.id,
})
export class DebtsComponent implements OnInit {
  debtAccountStatusEnums = DebtAccountStatus;

  debtAccounts: DebtAccountDetails[]
    = [
      new DebtAccountDetails('Bank of America', 1000, 3, 'ENROLLED', 2000, 0, 0.3),
      new DebtAccountDetails('Bank of America', 1000, 3, 'ENROLLED', 2000, 0, 0.3),
      new DebtAccountDetails('Bank of America', 1000, 3, 'ENROLLED', 2000, 0, 0.3),
      new DebtAccountDetails('Bank of America', 1000, 3, 'ENROLLED', 2000, 0, 0.3),
      new DebtAccountDetails('Bank of America', 1000, 3, 'ENROLLED', 2000, 0, 0.3),
      new DebtAccountDetails('Bank of America', 1000, 3, 'ENROLLED', 2000, 0, 0.3),
      new DebtAccountDetails('Bank of America', 1000, 3, 'ENROLLED', 2000, 0, 0.3),
      new DebtAccountDetails('Bank of America', 1000, 3, 'ENROLLED', 2000, 0, 0.3),
    ]

  constructor(
    private mobileService: MobileService
  ) { }

  ngOnInit() {
    this.mobileService.getDebtAccountDetails().subscribe(res => {
      if (res) {
        this.debtAccounts = res;
      }
      for (let debtAccount of this.debtAccounts) {
        debtAccount['expanded'] = false;
      }
    }, err => {
      console.log('Can\'t get debt account details');
    });

    if (!isAndroid) {
      this.debtAccounts.forEach(x => x['expanded'] = false);
    }
  }

}
