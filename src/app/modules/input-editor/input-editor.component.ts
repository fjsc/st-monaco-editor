import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputEditorComponent {

  public formControl = new FormControl('');

}
