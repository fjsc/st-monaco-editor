import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputEditorComponent } from './input-editor.component';
import { StEditorInputModule } from '@stratio/st-editor';

@NgModule({
  declarations: [InputEditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StEditorInputModule
  ],
  exports: [InputEditorComponent],
  providers: [],
})
export class InputEditorModule {}
