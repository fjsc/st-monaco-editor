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
  Output, EventEmitter,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ChangeDetectionStrategy,
  NgZone
} from '@angular/core';

import { EditorBase } from './../shared/editor-base';
import { StMonacoConfig, StEditorThemes } from '../models/editor';

@Component({
  selector: 'st-monaco-editor',
  template: '',
  styleUrls: ['./st-monaco-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StMonacoEditorComponent extends EditorBase implements OnChanges {

  @Input() code: string;
  @Input() language: string;
  @Input() minimapEnabled = true;
  @Input() config: StMonacoConfig = {};
  @Input() theme: StEditorThemes = StEditorThemes.vs;
  @Input() lineNumbers: 'on' | 'off' | 'relative' | 'interval'  = 'on';

  @Output() codeChange = new EventEmitter<String>();
  @Output() changeFocus = new EventEmitter<boolean>();

  private _codeEditorInstance: monaco.editor.IStandaloneCodeEditor;

  constructor(
    protected _elementRef: ElementRef,
    private _ngZone: NgZone) {
    super(_elementRef);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this._codeEditorInstance) {
      this._codeEditorInstance.dispose();
      this.initMonaco();
    }
  }

  public initMonaco(): void {

    const config: monaco.editor.IEditorConstructionOptions = {
      automaticLayout: true,
      ...this.config,
      value: this.code,
      language: this.language,
      lineNumbers: this.lineNumbers,
      theme: this.theme,
      minimap: {
        enabled: this.minimapEnabled
      }
    };

    if (this._codeEditorInstance) {
      this._codeEditorInstance.dispose();
    }

    this._ngZone.runOutsideAngular(() => {
      this._codeEditorInstance = monaco.editor.create(this._elementRef.nativeElement, config);

      this._codeEditorInstance.getModel().onDidChangeContent(e => {
        const value = this._codeEditorInstance.getValue();
        this._ngZone.run(() => {
          this.codeChange.emit(value);
        });
      });

      this._codeEditorInstance.onDidFocusEditorText(() => {
        this._ngZone.run(() => {
          this.changeFocus.emit(true);
        });
      });

      this._codeEditorInstance.onDidBlurEditorText(() => {
        this._ngZone.run(() => {
          this.changeFocus.emit(false);
        });
      });
    });
  }
}
