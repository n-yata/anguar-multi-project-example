import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Func1Component } from './func1/func1.component';
import { Func2Component } from './func2/func2.component';
import { Code404Component } from './errors/code404/code404.component';
import { Code500Component } from './errors/code500/code500.component';
import { SystemErrorComponent } from './errors/system-error/system-error.component';

const routes: Routes = [
  { path: '', redirectTo: 'func1', pathMatch: 'full' },
  { path: 'func1', component: Func1Component },
  { path: 'func2', component: Func2Component },
  { path: 'code404', component: Code404Component },
  { path: 'code500', component: Code500Component },
  { path: 'systemError', component: SystemErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
