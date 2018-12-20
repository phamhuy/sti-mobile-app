import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IfAndroidDirective, IfIosDirective } from './sdk-if.directive';

@NgModule({
  declarations: [
    IfAndroidDirective,
    IfIosDirective
  ],
  exports: [
    IfAndroidDirective,
    IfIosDirective
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DirectiveModule { }
