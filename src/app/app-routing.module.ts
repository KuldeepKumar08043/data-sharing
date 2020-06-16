import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RouteComponentA } from './route-component-a/route-component-a.component';
import { RouteComponentB } from './route-component-b/route-component-b.component';

const routes: Routes = [
  { path: 'route-a', component: RouteComponentA },
  { path: 'route-b/:page', component: RouteComponentB }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
