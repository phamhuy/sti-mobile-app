import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MakeDepositComponent } from './pages/make-deposit/make-deposit.component';
import { DepositHistoryComponent } from './pages/deposit-history/deposit-history.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'make-deposit', component: MakeDepositComponent},
    { path: 'deposit-history', component: DepositHistoryComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }