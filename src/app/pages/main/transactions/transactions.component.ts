import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionType } from '~/app/models/transaction.model';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { MobileService } from '~/app/services/mobile.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ns-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css', './transactions.css'],
})
export class TransactionsComponent implements OnInit {
  isLoading: boolean = true;
  searchInput: string;
  transactionTypeEnums = TransactionType;
  transactionTypes = Object.keys(TransactionType).map(x => TransactionType[x]);
  indexToTransactipType: { [key: number]: string };
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
    this.mobileService.getMobileTransactionList()
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(res => {
        if (res) {
          this.transactions = res.transactionList;
        }
      }, err => {
        console.log('can\'t get transactions');
      });

    // Init indexToTransactipType
    this.indexToTransactipType = {};
    for (let index in Object.keys(TransactionType)) {
      this.indexToTransactipType[index] = Object.keys(TransactionType)[index];
    }
  }

  selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.selectedType = this.indexToTransactipType[picker.selectedIndex];
  }

  onSearchBarLoaded(event) {
    setTimeout(() => {
      event.object.dismissSoftInput();
    }, 700);
  }

  onTextChange(event) {
  }

}
