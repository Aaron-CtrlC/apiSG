import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'films',
        loadChildren: () => import('./film/film.module').then(m => m.FilmModule)
    },
    {
        path: '',
        redirectTo: 'films',
        pathMatch: 'full'
    },
];
