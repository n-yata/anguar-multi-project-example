import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Func1Component } from './func1/func1.component';
import { Func2Component } from './func2/func2.component';
import { CommonModule } from 'common';
import { GlobalErrorHandler } from './errors/global-error-handler';

@NgModule({
  declarations: [
    AppComponent, // app
    Func1Component, // func1
    Func2Component, // func2
  ],
  imports: [
    BrowserModule, // browser
    AppRoutingModule, // routing
    CommonModule, // common
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }, // error
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
