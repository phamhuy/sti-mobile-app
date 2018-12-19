import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class TabService {
  private tabChangedSource = new Subject<number>();
  private debtAccountSelectedSource = new Subject<number>();
  routeStack: TabRoute[] = [];

  // Observable streams
  tabChangedSource$ = this.tabChangedSource.asObservable();
  debtAccountSelectedSource$ = this.debtAccountSelectedSource.asObservable();

  changeTab(index: number) {
    this.tabChangedSource.next(index);
  }

  selectDebtAccount(debtAccountPk: number) {
    this.debtAccountSelectedSource.next(debtAccountPk);
  }

}

export class TabRoute {
  tabIndex: number;
  path: string;
}