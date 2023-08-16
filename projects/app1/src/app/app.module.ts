import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Func1Component } from './func1/func1.component';
import { Func2Component } from './func2/func2.component';
import { CommonModule } from 'common';
import { GlobalErrorHandler } from './errors/handler/global-error-handler';
import { Code404Component } from './errors/code404/code404.component';
import { Code500Component } from './errors/code500/code500.component';
import { ModalComponent } from './modal/modal.component';
import { SystemErrorComponent } from './errors/system-error/system-error.component';

@NgModule({
  declarations: [
    AppComponent,
    Func1Component,
    Func2Component,
    Code404Component,
    Code500Component,
    ModalComponent,
    SystemErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
