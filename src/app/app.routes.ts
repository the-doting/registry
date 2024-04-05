import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./routes/home.component')).HomeComponent
    },
    {
        path: 'package/:name',
        loadComponent: async () => (await import('./routes/package.component')).PackageComponent
    },
    {
        path: 'package/:name/:version',
        loadComponent: async () => (await import('./routes/package.component')).PackageComponent
    },
    {
        path: 'package/:scope/:name/:version',
        loadComponent: async () => (await import('./routes/package.component')).PackageComponent
    },
];
