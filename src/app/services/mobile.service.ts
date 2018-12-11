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
    return this.http.post<DebtAccountSummary[]>(`${API_URL}/getDebtAccountSummary`, null);
  }

  getMobileTransactionList(): Observable<TransactionList> {
    return this.http.post<TransactionList>(`${API_URL}/getMobileTransactionList`, null);
  }

  getDebtAccountDetails(): Observable<DebtAccountDetails[]> {
    return this.http.post<DebtAccountDetails[]>(`${API_URL}/getDebtAccountDetails`, null);
  }

}
