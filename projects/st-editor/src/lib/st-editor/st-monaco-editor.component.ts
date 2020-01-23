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
  SimpleChanges,
  ChangeDetectionStrategy,
  NgZone,
  Inject,
  Optional,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';

import { EditorBase } from './../shared/editor-base';
import { IEditorConstructionOptions, StEditorThemes, ILineNumbers } from '../models/editor';
import { ST_MONACO_EDITOR_CONFIG, StMonacoEditorConfig } from '../st-monaco-editor.config';

@Component({
  selector: 'st-monaco-editor',
  template: '<div class="monaco-overlay" *ngIf="disabled"></div>',
  styleUrls: ['./st-monaco-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StMonacoEditorComponent extends EditorBase implements OnChanges, OnDestroy {

  /** */
  @Input() code: string;
  @Input() language: string;
  @Input() minimapEnabled = true;
  @Input() config: IEditorConstructionOptions = {};
  @Input() lineNumbers: ILineNumbers = 'on';
  @Input() theme: StEditorThemes = StEditorThemes.vs;
  @Input() readonly: boolean;
  @Input() disabled: boolean;

  @Output() codeChange = new EventEmitter<String>();
  @Output() changeFocus = new EventEmitter<boolean>();

  private _codeEditorInstance: monaco.editor.IStandaloneCodeEditor;
  private _currentCode: string;

  constructor(
    protected _elementRef: ElementRef,
    @Optional()
    @Inject(ST_MONACO_EDITOR_CONFIG) editorConfig: StMonacoEditorConfig,
    private _ngZone: NgZone) {
    super(_elementRef, editorConfig);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this._codeEditorInstance) {


      if (changes.theme || changes.language) {
        this._codeEditorInstance.dispose();
        this.initMonaco();
        return;
      }

      // if only change the code input field, updates value
      if (this.code !== this._currentCode) {
        this._codeEditorInstance.setValue(this.code);
        this._currentCode = this.code;
      }
      this._codeEditorInstance.updateOptions(this._getConfig());
    }
  }

  ngOnDestroy(): void {
    if (this._codeEditorInstance) {
      this._codeEditorInstance.dispose();
    }
  }


  public initMonaco(): void {
    const config: monaco.editor.IEditorConstructionOptions = this._getConfig();

    if (this._codeEditorInstance) {
      this._codeEditorInstance.dispose();
    }

    this._ngZone.runOutsideAngular(() => {

      this._codeEditorInstance = monaco.editor.create(this._elementRef.nativeElement, config);

      this._codeEditorInstance.getModel().onDidChangeContent(e => {
        const value = this._codeEditorInstance.getValue();
        this._ngZone.run(() => {
          this.codeChange.emit(value);
          this._currentCode = value;
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

  private _getConfig(): monaco.editor.IEditorConstructionOptions {
    this._currentCode = this.code;
    return {
      automaticLayout: true,
      value: this.code,
      language: this.language,
      lineNumbers: this.lineNumbers,
      theme: this.theme,
      readOnly: this.readonly || this.disabled,
      minimap: {
        enabled: this.minimapEnabled
      },
      ...this.config
    };
  }
}
