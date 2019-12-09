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
  forwardRef,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ViewEncapsulation,
  Inject
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StMonacoConfig } from '../models/editor';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'st-editor-input',
  templateUrl: './st-editor-input.component.html',
  styleUrls: ['./st-editor-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StEditorInputComponent),
    multi: true
  }]
})
export class StEditorInputComponent implements AfterViewInit, ControlValueAccessor  {

  @Input() language: string;
  @Input() label: string;
  @Input() contextualHelp: string;
  @Input() name: string;

  @ViewChild('scrollElement', {static: true}) scrollElement: ElementRef;
  @ViewChild('editorElement', {static: true, read: ElementRef}) editor: ElementRef;

  public isDisabled = false; // To check disable
  public code: string;
  public focus: boolean;

  public readonly monacoConfig: StMonacoConfig = {
    value: this.code,
    language: this.language,
    automaticLayout: true,
    lineNumbersMinChars: 2
  };

  private MIN_HEIGHT = 115;
  private currentHeight = this.MIN_HEIGHT;

  onChange = (_: any) => { };
  onTouched = () => { };

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this._onDrag = this._onDrag.bind(this);
    this._onRelease = this._onRelease.bind(this);
  }

  ngAfterViewInit(): void {
  }


  public codeChange(value: string) {
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.code = value;
  }

  // Registry the change function to propagate internal model changes
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  // Registry the touch function to propagate internal touch events TODO: make this function.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  changeFocus(isFocused: boolean) {
    this.focus = isFocused;
  }

  // tslint:disable-next-line:member-ordering
  position: number;
  // tslint:disable-next-line:member-ordering
  initialHeight: number;

  onResize(event) {
    this.position = event.pageY;
    this.initialHeight = this.editor.nativeElement.offsetHeight;
    this._document.addEventListener('mousemove', this._onDrag);
    this._document.addEventListener('mouseup', this._onRelease);
  }

  private _onDrag(e) {
    this.editor.nativeElement.style.height = (this.initialHeight - this.position + e.pageY) + 'px';

  }

  private _onRelease(e) {
    this._document.removeEventListener('mousemove', this._onDrag);
    this._document.removeEventListener('mouseup', this._onRelease);
  }


}
