import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NgShadowModule } from 'nativescript-ng-shadow';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { IfAndroidDirective, IfIosDirective } from './directives/sdk-if.directive';
import { HomeComponent } from './pages/home/home.component';
import { MakeDepositComponent } from './pages/make-deposit/make-deposit.component';
import { DepositHistoryComponent } from './pages/deposit-history/deposit-history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DebtsComponent } from './pages/debts/debts.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { ScanComponent } from './pages/scan/scan.component';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './components/card/card.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MobileInterceptor } from './services/mobile-interceptor';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CardViewComponent } from './components/card-view/card-view.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NgShadowModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent,
        IfAndroidDirective,
        IfIosDirective,
        LoginComponent,
        HomeComponent,
        MakeDepositComponent,
        DepositHistoryComponent,
        ProfileComponent,
        DebtsComponent,
        TransactionsComponent,
        ScanComponent,
        MainComponent,
        CardComponent,
        ContactUsComponent,
        CardViewComponent
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
