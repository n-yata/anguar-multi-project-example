import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Func1Component } from './func1/func1.component';
import { Func2Component } from './func2/func2.component';
import { CommonModule } from 'common';
import { GlobalErrorHandler } from './errorhandler/global-error-handler';
import { Code404Component } from './code404/code404.component';
import { Code500Component } from './code500/code500.component';
import { RetryComponent } from './retry/retry.component';

@NgModule({
  declarations: [
    AppComponent,
    Func1Component,
    Func2Component,
    Code404Component,
    Code500Component,
    RetryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
