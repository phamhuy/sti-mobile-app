import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MobileService } from '~/app/services/mobile.service';
import { DebtAccountDetails, DebtAccountStatus } from '~/app/models/debt-account.model';
import { isAndroid } from "tns-core-modules/platform";
import { TabService } from '~/app/services/tab.service';
import { ScrollView } from 'tns-core-modules/ui/scroll-view';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';

@Component({
  selector: 'ns-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css'],
  moduleId: module.id,
})
export class DebtsComponent implements OnInit {
  @ViewChild('scrollView') scrollView: ElementRef;
  @ViewChildren('debtCards') debtCards: QueryList<ElementRef<StackLayout>>;
  debtAccountStatusEnums = DebtAccountStatus;
  debtAccountPkToDebtAccountDetails: { [key: number]: DebtAccountDetails }; // A dictionary that maps from a debtAccountPk its corresponding debt account details

  debtAccounts: DebtAccountDetails[] = [
    new DebtAccountDetails('Bank of America', 1000, 3, 'ENROLLED', 1000, 0, 0.3),
    new DebtAccountDetails('Bank of America', 2000, 3, 'ENROLLED', 2000, 0, 0.3),
    new DebtAccountDetails('Bank of America', 3000, 3, 'ENROLLED', 3000, 0, 0.3),
    new DebtAccountDetails('Bank of America', 4000, 3, 'ENROLLED', 4000, 0, 0.3),
    new DebtAccountDetails('Bank of America', 5000, 3, 'ENROLLED', 5000, 0, 0.3),
    new DebtAccountDetails('Bank of America', 6000, 3, 'ENROLLED', 6000, 0, 0.3),
    new DebtAccountDetails('Bank of America', 7000, 3, 'ENROLLED', 7000, 0, 0.3),
    new DebtAccountDetails('Bank of America', 8000, 3, 'ENROLLED', 8000, 0, 0.3)
  ]

  constructor(
    private mobileService: MobileService,
    private tabService: TabService
  ) { }

  ngOnInit() {
    this.mobileService.getDebtAccountDetails().subscribe(res => {
      if (res) {
        // this.debtAccounts = res;
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

    // Init debtAccountPkToDebtAccountDetails
    this.debtAccountPkToDebtAccountDetails = this.debtAccounts.reduce((result, debtAccount) => {
      result[debtAccount.debtAccountPk] = debtAccount;
      return result;
    }, {});

    // Subsribe to the event when debt account is selected in the home tab
    this.tabService.debtAccountSelectedSource$.subscribe(debtAccountPk => {
      setTimeout(() => {
        const scrollView = <ScrollView>this.scrollView.nativeElement;

        if (this.debtCards.length != this.debtAccounts.length) {
          console.log('this.debtCards.length != this.debtAccounts.length', this.debtCards.length, this.debtAccounts.length);
          return;
        }

        const selectedDebtAccount = this.debtCards.find((item, index) => {
          if (this.debtAccounts[index].debtAccountPk == debtAccountPk) {
            this.debtAccounts[index]['expanded'] = true;
            return true;
          }
          return false;
        });

        if (selectedDebtAccount) {
          selectedDebtAccount['expanded'] = true;
          scrollView.scrollToVerticalOffset(scrollView.verticalOffset + selectedDebtAccount.nativeElement.getLocationRelativeTo(scrollView).y, true);
        }
      }, 1);
    });
  }

}
