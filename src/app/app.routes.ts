import { Routes } from '@angular/router';
import {ClientComponent} from "@app/pages/client/client.component";
import {MainComponent} from "@pages/admin/main/main.component";
import {NotFoundComponent} from "@app/components/not-found/not-found.component";
import {authGuardGuard, publicGuard} from "@app/core/guards/auth-guard.guard";
export const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        loadComponent: ()=> import('./pages/client/main/main.component').then(m => m.MainComponent)
      },
      {
        path: 'auth',
        canActivate: [publicGuard] ,
        children: [
          {
            path: 'log-in',
            loadComponent: ()=> import('../../../streaming-app/src/app/components/Auth/log-in/log-in.component').then(m => m.LogInComponent)
          },
          {
            path: 'sign-up',
            loadComponent: ()=> import('../../../streaming-app/src/app/components/Auth/register/register.component').then(m => m.RegisterComponent)
          }
        ]
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [authGuardGuard],
    loadComponent: ()=> import('./pages/admin/admin.component'),
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'storage',
        loadComponent: ()=> import('@app/pages/admin/storage/storage.component')
      },
      {
        path: 'profile',
        loadComponent: ()=> import('@app/pages/admin/profile/profile.component')
      },
      {
        path: 'settings',
        loadComponent: ()=> import('@app/pages/admin/settings/settings.component')
      },
      {
        path: 'charts',
        loadComponent: ()=> import('@/app/pages/admin/charts/charts.component')
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
