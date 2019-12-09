import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleEditorComponent } from './simple-editor.component';
import { StMonacoEditorModule } from '@stratio/st-editor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SimpleEditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StMonacoEditorModule
  ],
  exports: [SimpleEditorComponent],
  providers: [],
})
export class SimpleEditorModule {}
