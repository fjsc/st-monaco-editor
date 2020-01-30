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

import { sqlLang } from '../constants/sql';

export function extendSQL() {
  monaco.languages.registerCompletionItemProvider('sql', {
    provideCompletionItems: function (model, position) {

      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
      };
      return {
        suggestions: createDependencyProposals(range)
      };
    }
  });
}


function createDependencyProposals(range): monaco.languages.CompletionItem[] {
  // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
  // here you could do a server side lookup
  const keywords = sqlLang.keywords.map((keyword): monaco.languages.CompletionItem => {
    return {
      label: keyword,
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: keyword,
      range: range
    };
  });

  const operators = sqlLang.operators.map((operator): monaco.languages.CompletionItem => {
    return {
      label: operator,
      kind: monaco.languages.CompletionItemKind.Operator,
      insertText: operator,
      range: range
    };
  });

  return keywords.concat(operators);

}
