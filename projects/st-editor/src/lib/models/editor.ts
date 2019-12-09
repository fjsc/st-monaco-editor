import * as monaco from 'monaco-editor';

export enum StEditorThemes {
  vs = 'vs',
  vsDark = 'vs-dark',
  hcBlack = 'hc-black'
}

// tslint:disable-next-line:no-empty-interface
export interface StMonacoConfig extends monaco.editor.IEditorConstructionOptions {

}
