import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { DirectiveModule } from './directives/directive.module';
import { CardViewComponent } from './card-view/card-view.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NgShadowModule } from 'nativescript-ng-shadow';

@NgModule({
  declarations: [
    CardViewComponent
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DirectiveModule,
    NgShadowModule
  ],
  exports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    DirectiveModule,
    CardViewComponent,
    NgShadowModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
