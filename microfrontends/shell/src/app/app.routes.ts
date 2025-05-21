import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'mfe2',
    loadChildren: () => import('mfe2/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'mfe1',
    loadChildren: () => import('mfe1/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
