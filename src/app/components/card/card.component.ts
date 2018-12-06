import { Component, OnInit, Input } from '@angular/core';
import { isIOS } from "tns-core-modules/platform";
import { AndroidData, IOSData } from 'nativescript-ng-shadow';

@Component({
  selector: 'ns-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  moduleId: module.id,
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() content: { [key: string]: string };
  @Input() divider: boolean;
  @Input() actions: { [key: string]: CardActionFunction};

  constructor() { }

  ngOnInit() {
  }

  get keys(): string[] {
    return this.content ? Object.keys(this.content) : [];
  }

  get actionNames() {
    return this.actions ? Object.keys(this.actions) : [];
  }

  onTap() {
    console.log('tapping');
  }

}

export class CardActionFunction {
  componentRef;
  exec: Function;
  args: any[];
  shadowData: AndroidData | IOSData | string;
  btnTextColor: string;
  btnBackgroundColor: string;

  constructor(componentRef, exec: Function, args?: any[], btnTextColor?: string, btnBackgroundColor?: string) {
    this.componentRef = componentRef;
    this.exec = exec;
    this.args = args || [];
    this.btnTextColor = btnTextColor || 'white';
    this.btnBackgroundColor = btnBackgroundColor || '#12A6C0';
    this.shadowData = isIOS ? '3' : {
      elevation: 3,
      bgcolor: this.btnBackgroundColor
    };
  }
}