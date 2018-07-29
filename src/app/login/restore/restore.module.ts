import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestoreComponent } from './restore/restore.component';
import {RestoreRoutingModule} from "./restore-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RestoreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RestoreComponent
  ]
})
export class RestoreModule { }
