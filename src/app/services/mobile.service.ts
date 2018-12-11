import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DebtAccountSummary, DebtAccountDetails } from '../models/debt-account.model';
import { TransactionList } from '../models/transaction.model';
declare var API_URL;

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(
    private http: HttpClient,
  ) { }

  getDebtAccountSummary(): Observable<DebtAccountSummary[]> {
    return this.http.get<DebtAccountSummary[]>(`${API_URL}/getDebtAccountSummary`);
  }

  getMobileTransactionList(): Observable<TransactionList> {
    return this.http.get<TransactionList>(`${API_URL}/getMobileTransactionList`);
  }

  getDebtAccountDetails(): Observable<DebtAccountDetails[]> {
    return this.http.get<DebtAccountDetails[]>(`${API_URL}/getDebtAccountDetails`);
  }

}
