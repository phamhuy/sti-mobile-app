import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isAndroid } from "tns-core-modules/platform";
import { DebtAccountSummary } from '../models/debtAccountSummary.model';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  // private baseUrl = 'https://app-sti-mobile-sti.objectbrains.com/rest/settleitRestController';
  private baseUrl = 'http://10.0.2.2:8080/mobile-sti/rest/settleitRestController';

  constructor(
    private http: HttpClient
  ) { }

  getDebtAccountSummary(): Observable<DebtAccountSummary[]> {
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjIzNTBiNWY2NDM0Zjc2Y2NiM2IxMTlmZGQ4OGQxMzhjOWFjNTVmY2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RpLW1vYmlsZS1hcHAtdGVzdCIsImF1ZCI6InN0aS1tb2JpbGUtYXBwLXRlc3QiLCJhdXRoX3RpbWUiOjE1NDM4ODAzMjMsInVzZXJfaWQiOiJhWWQxTFRhMHkyYldMT0V6VmpsUlViTzRTRmgyIiwic3ViIjoiYVlkMUxUYTB5MmJXTE9FelZqbFJVYk80U0ZoMiIsImlhdCI6MTU0Mzg5Mjc1NCwiZXhwIjoxNTQzODk2MzU0LCJwaG9uZV9udW1iZXIiOiIrMTk0OTU1NTEyMzQiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIisxOTQ5NTU1MTIzNCJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.RdXyB5pApv1YtJqAoBUZVdhRn0_R2Sh-oM3fJyqYtTUCEYkbj1bztXK6g_oVh1p5BdhG32Yb4D8lZI7b7qTJGAW2lMeVUdwpdyDu8uaDRtxZi3LPP2ySe-QcFv5gC9jO5Bb5pN5UhodZR3vxl9cZqFViyuxev-A8Ah2EsOiHyoXa2d7GQMC4XU3ZJTK-_ZHk4c6osFNzn7vZ5Qa1dgm14YQT-8lkZwNhqyFr7vlO5FPRUbmN6cgMpVE0VCQwk-bQvaF3PydhsnghhunA_3qkflkmUoGNmrOY02hxhYjqWqXY2wjksjL5GaBsZcXh426KNPD-dFgzn3M2beqwueCODg';
    return this.http.post<DebtAccountSummary[]>(`${this.baseUrl}/getDebtAccountSummary`, { fireBaseID: token });
  }
}
