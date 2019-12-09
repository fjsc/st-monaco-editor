
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software – including all its source code – contains proprietary
 * information of Stratio Big Data Inc., Sucursal en España and
 * may not be revealed, sold, transferred, modified, distributed or
 * otherwise made available, licensed or sublicensed to third parties;
 * nor reverse engineered, disassembled or decompiled, without express
 * written authorization from Stratio Big Data Inc., Sucursal en España.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StEditorInputComponent } from './st-editor-input.component';
import { StMonacoEditorModule } from '../st-editor/st-monaco-editor.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    StEditorInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    StMonacoEditorModule
  ],
  exports: [
    StEditorInputComponent
  ],
  providers: []
})
export class StEditorInputModule { }
