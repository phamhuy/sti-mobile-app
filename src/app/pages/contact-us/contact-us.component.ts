import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { dial } from 'nativescript-phone';

@Component({
  selector: 'ns-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  moduleId: module.id,
})
export class ContactUsComponent implements OnInit {
  phoneNumber = '844-417-8546'

  constructor(
    private router: RouterExtensions
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.backToPreviousPage();
  }

  dial() {
    dial(this.phoneNumber, true);
  }

}
