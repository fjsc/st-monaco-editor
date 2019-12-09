import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffEditorComponent } from './diff-editor.component';
import { StMonacoEditorModule, StMonacoDiffEditorModule } from '@stratio/st-editor';

@NgModule({
  declarations: [DiffEditorComponent],
  imports: [
    CommonModule,
    StMonacoDiffEditorModule
  ],
  exports: [DiffEditorComponent],
  providers: [],
})
export class DiffEditorModule {}
