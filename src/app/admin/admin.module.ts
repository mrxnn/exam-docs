import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule,
    EditorModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
