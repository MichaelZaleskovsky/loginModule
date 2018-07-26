import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './homePage/home-page/home-page.component';
import {FormsModule} from '@angular/forms';
import {IsLoginService} from "./services/is-login.service";
import {HttpRequestService} from "./services/http-request.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    IsLoginService,
    HttpRequestService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
