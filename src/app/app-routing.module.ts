import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

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
        canActivate: [AuthGuard],
        loadChildren: './pages/main/main.module#MainModule'
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }