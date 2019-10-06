import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContentComponent } from './create-content/create-content.component';

const routes: Routes = [
  { path: 'create-content', component: CreateContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
