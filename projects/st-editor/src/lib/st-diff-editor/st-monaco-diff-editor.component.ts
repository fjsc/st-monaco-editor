/// <reference path="../../../../../node_modules/monaco-editor/monaco.d.ts" />

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

import {
  Component,
  Input,
  ElementRef,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectionStrategy,
  NgZone} from '@angular/core';
import { EditorBase } from '../shared/editor-base';
import { StEditorThemes } from '../models/editor';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'st-monaco-diff-editor',
  template: '',
  styleUrls: ['./st-monaco-diff-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StMonacoDiffEditorComponent extends EditorBase implements OnChanges {

  @Input() language: string;
  @Input() theme: StEditorThemes = StEditorThemes.vs;
  @Input() originalModel = '';
  @Input() modifiedModel = '';
  @Output() codeChange = new EventEmitter<String>();

  private _codeEditorInstance: monaco.editor.IStandaloneDiffEditor;

  constructor(
    protected _elementRef: ElementRef,
    private _ngZone: NgZone) {
    super(_elementRef);
  }

  ngOnChanges() {
    if (this._codeEditorInstance) {
      this._codeEditorInstance.setModel({
        original: monaco.editor.createModel(this.originalModel, this.language),
        modified: monaco.editor.createModel(this.modifiedModel, this.language)
      });
    }
  }

  public initMonaco(): void {
    this._codeEditorInstance = monaco.editor.createDiffEditor(this._elementRef.nativeElement, {
      theme: this.theme
    });

    this._codeEditorInstance.setModel({
      original: monaco.editor.createModel(this.originalModel, this.language),
      modified: monaco.editor.createModel(this.modifiedModel, this.language)
    });
    this._codeEditorInstance.getModel().modified.onDidChangeContent(e => {
      this._ngZone.run(() => {
        this.codeChange.emit(this._codeEditorInstance.getModel().modified.getValue());
      });
    });
  }
}
