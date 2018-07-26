import { Routes } from '@angular/router';
import {HomePageComponent} from './homePage/home-page/home-page.component';
import {IsLoginService} from './services/is-login.service';

export const routes: Routes = [
  {
    path: 'login',
//    component: LoginComponent
    loadChildren: './login/login/login.module#LoginModule'
  },
  {
      path: 'register',
      loadChildren: './login/register/register.module#RegisterModule'
    },
  {
    path: 'restore',
    loadChildren: './login/restore/restore.module#RestoreModule'
  },
  {
    path: 'start',
    canActivate: [IsLoginService],
    component: HomePageComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
