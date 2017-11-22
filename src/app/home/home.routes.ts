import { Routes } from '@angular/router';
// app
import { HomeComponent } from './components/home/home.component';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'send',
        loadChildren: 'app/send/send.module#SendModule'
    },
    {
        path: 'receive',
        loadChildren: 'app/receive/receive.module#ReceiveModule'
    }
];
