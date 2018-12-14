import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionType } from '~/app/models/transaction.model';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { MobileService } from '~/app/services/mobile.service';

@Component({
  selector: 'ns-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  moduleId: module.id,
})
export class TransactionsComponent implements OnInit {
  transactionTypeEnums = TransactionType;
  transactionTypes = Object.keys(TransactionType).filter(x => isNaN(Number(x))).map(x => x.replace(/_/g, ' '));
  selectedType: TransactionType | string;
  transactions = [
    new Transaction('DRAFT', 12345, 0),
    new Transaction('DRAFT', -12345, 0),
    new Transaction('DRAFT', 12345, 0),
    new Transaction('DRAFT', 12345, 0),
    new Transaction('DRAFT', -12345, 0),
    new Transaction('DRAFT', 12345, 0),
    new Transaction('DRAFT', 12345, 0),
    new Transaction('DRAFT', -12345, 0),
    new Transaction('DRAFT', 12345, 0),
    new Transaction('DRAFT', 12345, 0),
  ]

  constructor(
    private mobileService: MobileService
  ) { }

  ngOnInit() {
    this.mobileService.getMobileTransactionList().subscribe(res => {
      if (res) {
        this.transactions = res.transactionList;
      }
    }, err => {
      console.log('can\'t get transactions');
      // console.log('err =', err);
    })
  }

  selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.selectedType = TransactionType[picker.selectedIndex];
  }

  onSearchBarLoaded(event) {
    setTimeout(() => {
      event.object.dismissSoftInput();
    }, 700);
  }

}
