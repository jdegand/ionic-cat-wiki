import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'benefits',
    loadComponent: () => import('./benefits/benefits.page').then( m => m.BenefitsPage)
  },
  {
    path: 'breed/:name',
    loadComponent: () => import('./breed/breed.page').then( m => m.BreedPage)
  },
  {
    path: 'breeds',
    loadComponent: () => import('./breeds/breeds.page').then( m => m.BreedsPage)
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.page').then( m => m.NotFoundPage)
  },
];
