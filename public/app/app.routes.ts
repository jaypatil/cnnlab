import { provideRouter, RouterConfig }  from '@angular/router';
import { MenubarComponent } from './menubar.component';
import { DashboardComponent } from './dashboard.component';

const routes: RouterConfig = [
 {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'menubar',
    component: MenubarComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
