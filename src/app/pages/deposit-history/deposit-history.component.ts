import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-deposit-history',
  templateUrl: './deposit-history.component.html',
  styleUrls: ['./deposit-history.component.css'],
  moduleId: module.id,
})
export class DepositHistoryComponent implements OnInit {
  deposits = [
    {
      date: '9/16/2018',
      amount: 157
    },
    {
      date: '9/16/2018',
      amount: 157
    },
    {
      date: '9/16/2018',
      amount: 157
    },
    {
      date: '9/16/2018',
      amount: 157
    },
    {
      date: '9/16/2018',
      amount: 157
    },
    {
      date: '9/16/2018',
      amount: 157
    },
    {
      date: '9/16/2018',
      amount: 157
    },
    {
      date: '9/16/2018',
      amount: 157
    },
    {
      date: '9/16/2018',
      amount: 157
    },
    {
      date: '9/16/2018',
      amount: 157
    },
    {
      date: '9/16/2018',
      amount: 157
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
