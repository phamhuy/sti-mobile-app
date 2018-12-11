import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  moduleId: module.id,
})
export class ContactUsComponent implements OnInit {

  constructor(
    private router: RouterExtensions
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.backToPreviousPage();
  }

}
