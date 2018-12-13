import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { DebtsComponent } from './pages/debts/debts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ScanComponent } from './pages/scan/scan.component';
import { MainComponent } from './pages/main/main.component';
import { MakeDepositComponent } from './pages/make-deposit/make-deposit.component';
import { AuthGuard } from './services/auth.guard';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent,
                outlet: 'homeTab'
            },
            {
                path: 'make-deposit',
                component: MakeDepositComponent,
                outlet: 'homeTab'
            },
            {
                path: 'transactions',
                component: TransactionsComponent,
                outlet: 'transactionsTab'
            },
            {
                path: 'scan',
                component: ScanComponent,
                outlet: 'scanTab'
            },
            {
                path: 'debts',
                component: DebtsComponent,
                outlet: 'debtsTab'
            },
            {
                path: 'notifications',
                component: NotificationsComponent,
                outlet: 'notificationsTab'
            },
            {
                path: 'profile',
                component: ProfileComponent,
                outlet: 'homeTab'
            }
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }