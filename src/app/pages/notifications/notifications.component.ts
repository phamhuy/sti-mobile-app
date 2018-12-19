import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  moduleId: module.id,
})
export class NotificationsComponent implements OnInit {
  notifications = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.notifications.push(i);
    }
  }

}
