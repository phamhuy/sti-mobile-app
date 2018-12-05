import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardActionFunction } from '~/app/components/card/card.component';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {
  content = {
    label1: 'value1sdfsdfsd',
    label2asdf: 'value2'
  }

  actions = {
    cancel: new CardActionFunction(this.cancel, ['hi', 'hello'], 'red', 'yellow'),
    ok: new CardActionFunction(this.cancel, ['hi', 'hello']),
    // cancel: new CardActionFunction(this.cancel, ['hi', 'hello'])
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  makeDeposit() {
    this.router.navigate(['/main', {outlets: { homeTab: 'make-deposit'}}]);
  }

  depositHistory() {
    this.router.navigate(['/deposit-history']);
  }

  cancel(arg1, arg2, arg3) {
    console.log('args =', arg1, arg2, arg3);
  }

}
