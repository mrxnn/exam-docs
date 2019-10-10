import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContentComponent } from './create-content/create-content.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AdminHomeComponent },
  { path: 'create-content', component: CreateContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
