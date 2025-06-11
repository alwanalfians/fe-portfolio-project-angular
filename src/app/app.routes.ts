import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then(
        (m) => m.DASHBOARD_ROUTES
      ),
  },
  {
    path: 'data/educations',
    loadChildren: () =>
      import('./pages/educations/educations.routes').then(
        (m) => m.EDUCATIONS_ROUTES
      ),
  },
  {
    path: 'data/experiences',
    loadChildren: () =>
      import('./pages/experiences/experiences.routes').then(
        (m) => m.EXPERIENCES_ROUTES
      ),
  },
];
