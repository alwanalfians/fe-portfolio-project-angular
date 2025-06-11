import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard',
    },
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then(
        (m) => m.DASHBOARD_ROUTES
      ),
  },
  {
    path: 'data',
    data: {
      breadcrumb: 'Data',
    },
    children: [
      {
        path: 'educations',
        data: {
          breadcrumb: 'Educations',
        },
        loadChildren: () =>
          import('./pages/educations/educations.routes').then(
            (m) => m.EDUCATIONS_ROUTES
          ),
      },
      {
        path: 'experiences',
        data: {
          breadcrumb: 'Experiences',
        },
        loadChildren: () =>
          import('./pages/experiences/experiences.routes').then(
            (m) => m.EXPERIENCES_ROUTES
          ),
      },
    ],
  },
];
