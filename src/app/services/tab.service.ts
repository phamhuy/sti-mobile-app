import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class TabService {
  private tabChangedSource = new Subject<number>();
  routeStack: TabRoute[] = [];

  // Observable string streams
  tabChangedSource$ = this.tabChangedSource.asObservable();

  // Service message commands
  changeTab(index: number) {
    this.tabChangedSource.next(index);
  }
}

export class TabRoute {
  tabIndex: number;
  path: string;
}