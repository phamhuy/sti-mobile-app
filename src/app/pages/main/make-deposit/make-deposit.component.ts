import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDatetimepicker } from 'nativescript-modal-datetimepicker';
import { isAndroid, Color } from 'tns-core-modules/ui/page/page';
import { FlexboxLayout } from 'tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout';

@Component({
  selector: 'ns-make-deposit',
  templateUrl: './make-deposit.component.html',
  styleUrls: ['./make-deposit.component.css'],
})
export class MakeDepositComponent implements OnInit {
  date: Date | number;
  amount: number;
  picker: ModalDatetimepicker;
  isLoading: boolean;

  constructor(
    private router: RouterExtensions
  ) { }

  ngOnInit() {
    this.date = new Date();
    this.picker = new ModalDatetimepicker();
  }

  async pickDate(dateBtn: FlexboxLayout) {
    // Animate for android
    if (isAndroid) {
      await dateBtn.animate({
        backgroundColor: new Color('#EBEBEB'),
        duration: 200
      })
      await dateBtn.animate({
        backgroundColor: new Color('transparent'),
        duration: 0
      });
    }

    // Pick a date
    const date = await this.picker.pickDate();
    if (date) {
      this.date = Date.parse(`${date.month}/${date.day}/${date.year}`);
    }
  }

  scheduleDeposit() {
    // TODO: send data to backend
  }

  goBack() {
    this.router.backToPreviousPage();
  }

}