import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EducationsComponent } from './pages/educations/educations.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard',
    },
    component: DashboardComponent
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
        component: EducationsComponent
      },
      {
        path: 'experiences',
        data: {
          breadcrumb: 'Experiences',
        },
        component: ExperiencesComponent
      },
    ],
  },
];
