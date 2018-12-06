import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DebtAccountSummary } from '../models/debtAccountSummary.model';
import { environment } from '~/environments/environment';

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
}
