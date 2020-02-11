import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ICreateDependencyProposals, ICompletionItem } from '@stratio/st-monaco-editor';
import { sqlLang } from 'src/app/constants/sql';

@Component({
  selector: 'app-input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputEditorComponent {

  public errorMessages: { [errorName: string]: string } = {
    required: 'This field is required',
    invalidJSON: 'JSON format is invalid'
  };
  public formControl = new FormControl(
    `{
      "appName": "App1",
      "widget": {
        "debug": "on",
        "window": {
            "title": "Sample Konfabulator Widget",
            "name": "main_window",
            "width": 500,
            "height": 500
        },
        "image": {
            "src": "Images/Sun.png",
            "name": "sun1",
            "hOffset": 250,
            "vOffset": 250,
            "alignment": "center"
        },
        "text": {
            "data": "Click Here",
            "size": 36,
            "style": "bold",
            "name": "text1",
            "hOffset": 250,
            "vOffset": 100,
            "alignment": "center",
            "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
        }
      }
    }`,
    [Validators.required]
  );

  public setValue() {
    this.formControl.setValue(
      `{
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
      }`);
  }


  public reset() {
    this.formControl.reset();
  }

  public suggestionsFn: ICreateDependencyProposals = (range)  => {
    // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
    // here you could do a server side lookup
    const keywords: Array<ICompletionItem> = sqlLang.keywords.map((keyword): ICompletionItem => {
      return {
        label: keyword,
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: keyword,
        range: range
      };
    });

    const operators: Array<ICompletionItem> = sqlLang.operators.map((operator): ICompletionItem => {
      return {
        label: operator,
        kind: monaco.languages.CompletionItemKind.Operator,
        insertText: operator,
        range: range
      };
    });
    return keywords.concat(operators);
  }

}
