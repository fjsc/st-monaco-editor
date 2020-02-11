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

import * as monaco from 'monaco-editor';

/**
 * Default editor themes
 */
export enum StEditorThemes {
  vs = 'vs',
  vsDark = 'vs-dark',
  hcBlack = 'hc-black'
}

/**
 * Simple editor construction options
 */
export type IEditorConstructionOptions = monaco.editor.IEditorConstructionOptions;

/**
 * Diff editor construction options
 */
export type IDiffEditorConstructionOptions = monaco.editor.IDiffEditorConstructionOptions;

export type ILineNumbers =  IEditorConstructionOptions['lineNumbers'];

export interface ICreateDependencyRange {
  startLineNumber: number;
  endLineNumber: number;
  startColumn: number;
  endColumn: number;
}

export import CompletionItemKindEnum = monaco.languages.CompletionItemKind;
export type CompletionItemInsertTextRule = monaco.languages.CompletionItemInsertTextRule;

export interface ICompletionItem extends monaco.languages.CompletionItem {
  kind: CompletionItemKindEnum;
  insertTextRules?: CompletionItemInsertTextRule;
}

export type ICreateDependencyProposals = (range: ICreateDependencyRange) => ICompletionItem[];
