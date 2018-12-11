import { Injectable } from '@angular/core';
import { alert, confirm, AlertOptions, ConfirmOptions } from "tns-core-modules/ui/dialogs";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  alert(title: string, message: string = ' ', okButtonText: string = 'OK') {
    let options: AlertOptions = {
      title: title,
      message: message,
      okButtonText: okButtonText
    };

    return alert(options);
  }

  confirm(title: string, message: string, okButtonText: string, cancelButtonText: string, neutralButtonText?: string) {
    let options: ConfirmOptions = {
      title: title,
      message: message,
      okButtonText: okButtonText,
      cancelButtonText: cancelButtonText,
      neutralButtonText: neutralButtonText
    }

    return confirm(options);
  }
}
