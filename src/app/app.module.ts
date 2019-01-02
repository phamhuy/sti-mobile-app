import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MobileInterceptor } from './services/mobile-interceptor';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SharedModule } from './shared/shared.module';
import { DropDownModule } from "nativescript-drop-down/angular";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        ContactUsComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        SharedModule,
        DropDownModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: MobileInterceptor, multi: true }
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
