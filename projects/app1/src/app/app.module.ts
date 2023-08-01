import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Func1Component } from './func1/func1.component';
import { Func2Component } from './func2/func2.component';
import { CommonModule } from 'common';

@NgModule({
  declarations: [
    AppComponent,
    Func1Component,
    Func2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
