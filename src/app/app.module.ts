import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Rou1Component } from './rou1/rou1.component';
import { FormsModule } from '@angular/forms';
import { Header1Component } from './header1/header1.component';

@NgModule({
  declarations: [
    AppComponent,
    Rou1Component,
    Header1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
