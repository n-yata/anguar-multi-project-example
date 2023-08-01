import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Func1Component } from './func1/func1.component';
import { Func2Component } from './func2/func2.component';

const routes: Routes = [
  {path: '', redirectTo: 'func1', pathMatch: 'full'},
  {path: 'func1', component: Func1Component},
  {path: 'func2', component: Func2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
