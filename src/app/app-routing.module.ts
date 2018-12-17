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
import { CanActivate } from '@angular/router/src/utils/preactivation';

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
                outlet: 'homeTab',
                path: '',
                children: [
                    {
                        path: '',
                        component: HomeComponent,
                    },
                    {
                        path: 'home',
                        component: HomeComponent,
                    },
                    {
                        path: 'make-deposit',
                        component: MakeDepositComponent
                    }
                ]
            },
            {
                outlet: 'transactionsTab',
                path: '',
                component: TransactionsComponent
            },
            {
                outlet: 'scanTab',
                path: '',
                component: ScanComponent
            },
            {
                outlet: 'debtsTab',
                path: '',
                component: DebtsComponent
            },
            {
                outlet: 'notificationsTab',
                path: '',
                component: NotificationsComponent
            }
        ]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }