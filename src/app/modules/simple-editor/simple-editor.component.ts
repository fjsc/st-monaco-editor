import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tsExample, cssExample, sqlExample } from './simple-editor.models';
import { StMonacoConfig, StEditorThemes } from '@stratio/st-editor';

@Component({
  selector: 'app-simple-editor',
  templateUrl: './simple-editor.component.html',
  styleUrls: ['./simple-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleEditorComponent {

  public languageControl = new FormControl('typescript');
  public initCodes = {
    typescript: tsExample,
    css: cssExample,
    sql: sqlExample
  };

  public themeControl = new FormControl(StEditorThemes.vsDark);
  public themes = StEditorThemes;

}
