import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestoreComponent} from './restore/restore.component';


const routes: Routes = [
  {
    path: '',
    component: RestoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoreRoutingModule { }
