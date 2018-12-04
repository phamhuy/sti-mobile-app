import { Component, OnInit } from '@angular/core';
import { MobileService } from '~/app/services/mobile.service';

@Component({
  selector: 'ns-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css'],
  moduleId: module.id,
})
export class DebtsComponent implements OnInit {

  constructor(
    private mobileService: MobileService
  ) { }

  ngOnInit() {
    // this.mobileService.getDebtAccountSummary().subscribe(res => {
    //   console.log('res =', typeof res, res);
    // });
  }

}
