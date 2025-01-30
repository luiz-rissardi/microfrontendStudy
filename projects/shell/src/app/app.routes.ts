import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"home",
        loadComponent:()=> loadRemoteModule("remote","./Component").then(m=>m.AppComponent)
    }
];
