import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DebtAccountSummary, DebtAccountDetails } from '../models/debt-account.model';
import { environment } from '~/environments/environment';
import { TransactionList } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getDebtAccountSummary(): Observable<DebtAccountSummary[]> {
    return this.http.post<DebtAccountSummary[]>(`${this.baseUrl}/getDebtAccountSummary`, null);
  }

  getMobileTransactionList(): Observable<TransactionList> {
    return this.http.post<TransactionList>(`${this.baseUrl}/getMobileTransactionList`, null);
  }

  getDebtAccountDetails(): Observable<DebtAccountDetails[]> {
    return this.http.post<DebtAccountDetails[]>(`${this.baseUrl}/getDebtAccountDetails`, null);
  }

}
