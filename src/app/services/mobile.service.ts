import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DebtAccountSummary, DebtAccountDetails } from '../models/debt-account.model';
import { TransactionList } from '../models/transaction.model';
import { AccountSummary } from '../models/account-summary.model';
import { environment } from '~/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAccountSummary(): Observable<AccountSummary> {
    return this.http.get<AccountSummary>(`${this.baseUrl}/getAccountSummary`);
  }

  getDebtAccountSummary(): Observable<DebtAccountSummary[]> {
    return this.http.get<DebtAccountSummary[]>(`${this.baseUrl}/getDebtAccountSummary`);
  }

  getMobileTransactionList(): Observable<TransactionList> {
    return this.http.get<TransactionList>(`${this.baseUrl}/getMobileTransactionList`);
  }

  getDebtAccountDetails(): Observable<DebtAccountDetails[]> {
    return this.http.get<DebtAccountDetails[]>(`${this.baseUrl}/getDebtAccountDetails`);
  }

}
