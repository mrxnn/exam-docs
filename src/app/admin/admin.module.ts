import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateContentComponent } from './create-content/create-content.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [CreateContentComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
