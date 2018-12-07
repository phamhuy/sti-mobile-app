import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionType } from '~/app/models/transaction.model';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { SearchBar } from 'tns-core-modules/ui/search-bar';

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
    new Transaction(TransactionType.Draft, 12345, 0),
    new Transaction(TransactionType.Draft, -12345, 0),
    new Transaction(TransactionType.Draft, 12345, 0),
    new Transaction(TransactionType.Draft, 12345, 0),
    new Transaction(TransactionType.Draft, -12345, 0),
    new Transaction(TransactionType.Draft, 12345, 0),
    new Transaction(TransactionType.Draft, 12345, 0),
    new Transaction(TransactionType.Draft, -12345, 0),
    new Transaction(TransactionType.Draft, 12345, 0),
    new Transaction(TransactionType.Draft, 12345, 0),
  ]

  constructor() { }

  ngOnInit() {
  }

  selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.selectedType = TransactionType[picker.selectedIndex];
  }

  onSearchBarLoaded(event) {
    setTimeout(() => {
      event.object.dismissSoftInput();
    }, 500);
  }

}
