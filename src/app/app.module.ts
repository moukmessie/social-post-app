import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData} from "@angular/common";

import { AppComponent } from './app.component';
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as fr from '@angular/common/locales/fr';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import {PostSnapComponent} from "./post-snap/post-snap.component";
import {PostSnapListComponent} from "./post-snap-list/post-snap-list.component";
import {SinglePostSnapComponent} from "./single-post-snap/single-post-snap.component";




@NgModule({
  declarations: [
    AppComponent,
    PostSnapComponent,
    PostSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SinglePostSnapComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
