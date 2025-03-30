import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { Title } from '@angular/platform-browser';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'EWC Tantra Hill | Home Page'
    }
];
