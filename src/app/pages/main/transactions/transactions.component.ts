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
  transactionTypes = Object.keys(TransactionType).filter(x => isNaN(Number(x))).map(x => this.camelize(x));
  selectedType: TransactionType;
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
  ];
  filteredTransactions: Transaction[] = this.transactions;

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
          this.filterTransactions();
        }
      }, err => {
        console.log('can\'t get transactions');
      });
  }

  selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.selectedType = picker.selectedIndex;
    this.filterTransactions();
  }

  filterTransactions() {
    this.filteredTransactions = this.transactions
      .filter(transaction => this.selectedType == TransactionType.ALL || TransactionType[transaction.transactionType.toString()] == this.selectedType)
      .map(transaction => {
        return new Transaction(this.camelize(transaction.transactionType.toString()), transaction.amount, transaction.processDate);
      });
  }

  onSearchBarLoaded(event) {
    setTimeout(() => {
      event.object.dismissSoftInput();
    }, 700);
  }

  onTextChange(event) {
  }

  camelize(sentence: string) {
    return sentence.replace(/_/g, ' ').toLowerCase().replace(/\w\S*/g, word => word.charAt(0).toLocaleUpperCase() + word.substr(1));
  }

}
