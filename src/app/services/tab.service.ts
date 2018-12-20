import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { MainModule } from '../pages/main/main.module';

@Injectable({
  providedIn: MainModule
})
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