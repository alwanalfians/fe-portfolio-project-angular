import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard',
    },
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
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
        loadComponent: () =>
          import('./pages/educations/educations.component').then(
            (m) => m.EducationsComponent
          ),
      },
      {
        path: 'experiences',
        data: {
          breadcrumb: 'Experiences',
        },
        loadComponent: () =>
          import('./pages/experiences/experiences.component').then(
            (m) => m.ExperiencesComponent
          ),
      },
    ],
  },
];
