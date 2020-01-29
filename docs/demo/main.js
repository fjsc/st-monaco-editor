(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/st-editor/src/lib/st-editor-input/st-editor-input.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/st-editor/src/lib/st-editor-input/st-editor-input.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"st-editor\" [ngClass]=\"{\r\n  'st-editor--active': focus,\r\n  'st-editor--disabled': isDisabled,\r\n  'st-editor--error': hasErrors\r\n  }\">\r\n  <label st-label\r\n    class=\"st-editor__label\"\r\n    [attr.for]=\"name\">{{label}}</label>\r\n  <div class=\"st-editor__container\" #editorElement>\r\n    <st-monaco-editor class=\"st-editor__monaco\"\r\n      [attr.id]=\"qaTag\"\r\n      class=\"st-editor__monaco st-input-mode\"\r\n      [config]=\"monacoConfig\"\r\n      [code]=\"code\"\r\n      [disabled]=\"disabled || isDisabled\"\r\n      (changeFocus)=\"changeFocus($event)\"\r\n      [readonly]=\"readonly || isDisabled\"\r\n      [theme]=\"theme\"\r\n      (codeChange)=\"codeChange($event)\"></st-monaco-editor>\r\n    <div class=\"resize-icon\" #scrollElement *ngIf=\"resizable\" (mousedown)=\"onResize($event)\" #resizeElement></div>\r\n  </div>\r\n  <div class=\"st-input-error-layout\" *ngIf=\"!focus && errorMessage && errorMessage.length\">\r\n    <span class=\"st-input-error-message\">{{errorMessage}}</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"app\">\r\n  <div class=\"container\">\r\n    <div class=\"app__container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar__content\">\r\n      <div class=\"navbar__logo\">\r\n        <a  routerLink=\"/\">StMonacoEditor</a>\r\n      </div>\r\n      <ul class=\"navbar__menu\">\r\n        <li>\r\n          <a routerLink=\"/\">Simple editor</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"diff-editor\">Diff editor</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"input-editor\">Input editor</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/diff-editor/diff-editor.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/diff-editor/diff-editor.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Diff editor example</h2>\r\n<st-monaco-diff-editor\r\n  class=\"editor-example\"\r\n  [language]=\"language\"\r\n  [originalModel]=\"originalModel\"\r\n  [modifiedModel]=\"modifiedModel\"></st-monaco-diff-editor>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/input-editor/input-editor.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/input-editor/input-editor.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article>\r\n  <h2>Editor input example</h2>\r\n  <st-editor-input class=\"editor-input\"\r\n    [formControl]=\"formControl\"\r\n    [label]=\"'Input name'\"\r\n    [validateJson]=\"true\"\r\n    [required]=\"true\"\r\n    [maxLength]=\"1000\"\r\n    [errorMessages]=\"errorMessages\"\r\n    [language]=\"'json'\"></st-editor-input>\r\n    <section class=\"editor-input__buttons\">\r\n      <button (click)=\"setValue()\" class=\"button button-link-primary\" >Set template value</button>\r\n      <button (click)=\"reset()\" class=\"button button-link-primary\" >Reset values</button>\r\n    </section>\r\n\r\n\r\n  VALID: {{formControl.valid}}\r\n\r\n  {{formControl.errors | json}}\r\n  <br>\r\n</article>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simple-editor/simple-editor.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simple-editor/simple-editor.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Simple Editor example</h2>\r\n\r\n<div class=\"option\">\r\n  <label class=\"option__label\" for=\"language\">Language</label>\r\n  <select id=\"language\" [formControl]=\"languageControl\">\r\n    <option [attr.selected]=\"item.key === languageControl.value || null\" *ngFor=\"let item of initCodes | keyvalue\">{{item.key}}</option>\r\n  </select>\r\n</div>\r\n\r\n<div class=\"option\">\r\n  <label class=\"option__label\" for=\"language\">Theme</label>\r\n  <select id=\"theme\" [formControl]=\"themeControl\">\r\n    <option [attr.selected]=\"item.key === themeControl.value || null\" *ngFor=\"let item of themes | keyvalue\">{{item.key}}</option>\r\n  </select>\r\n</div>\r\n\r\n<div class=\"option\">\r\n  <label class=\"option__label\" for=\"language\">Show minimap</label>\r\n  <st-checkbox class=\"option__checkbox\" [formControl]=\"minimapControl\"></st-checkbox>\r\n</div>\r\n\r\n<div class=\"option\">\r\n  <label class=\"option__label\" for=\"language\">Readonly</label>\r\n  <st-checkbox class=\"option__checkbox\" [formControl]=\"readonlyControl\"></st-checkbox>\r\n</div>\r\n\r\n<st-monaco-editor class=\"editor-example\"\r\n  [config]=\"config\"\r\n  [language]=\"languageControl.value\"\r\n  [minimapEnabled]=\"minimapControl.value\"\r\n  [theme]=\"themeControl.value\"\r\n  [readonly]=\"readonlyControl.value\"\r\n  [(code)]=\"initCodes[languageControl.value]\"></st-monaco-editor>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./projects/st-editor/src/lib/models/editor.ts":
/*!*****************************************************!*\
  !*** ./projects/st-editor/src/lib/models/editor.ts ***!
  \*****************************************************/
/*! exports provided: StEditorThemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StEditorThemes", function() { return StEditorThemes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Default editor themes
 */
var StEditorThemes;
(function (StEditorThemes) {
    StEditorThemes["vs"] = "vs";
    StEditorThemes["vsDark"] = "vs-dark";
    StEditorThemes["hcBlack"] = "hc-black";
})(StEditorThemes || (StEditorThemes = {}));


/***/ }),

/***/ "./projects/st-editor/src/lib/shared/editor-base.ts":
/*!**********************************************************!*\
  !*** ./projects/st-editor/src/lib/shared/editor-base.ts ***!
  \**********************************************************/
/*! exports provided: EditorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorBase", function() { return EditorBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

var loadedMonaco = false;
var loadPromise;
var EditorBase = /** @class */ (function () {
    function EditorBase(_elementRef, _editorConfig) {
        this._elementRef = _elementRef;
        this._editorConfig = _editorConfig;
    }
    EditorBase.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (loadedMonaco) {
            // Wait until monaco editor is available
            loadPromise.then(function () {
                _this.initMonaco();
            });
        }
        else {
            loadedMonaco = true;
            loadPromise = new Promise(function (resolve) {
                if (typeof (window.monaco) === 'object') {
                    resolve();
                    return;
                }
                var onAmdLoader = function () {
                    // Load monaco
                    window.require.config({ paths: { 'vs': 'assets/monaco/vs' } });
                    window.require(['vs/editor/editor.main'], function () {
                        if (_this._editorConfig && _this._editorConfig.onMonacoLoad) {
                            _this._editorConfig.onMonacoLoad();
                        }
                        _this.initMonaco();
                        resolve();
                    });
                };
                // Load AMD loader if necessary
                if (!window.require) {
                    var loaderScript = document.createElement('script');
                    loaderScript.type = 'text/javascript';
                    loaderScript.src = 'assets/monaco/vs/loader.js';
                    loaderScript.addEventListener('load', onAmdLoader);
                    document.body.appendChild(loaderScript);
                }
                else {
                    onAmdLoader();
                }
            });
        }
    };
    return EditorBase;
}());



/***/ }),

/***/ "./projects/st-editor/src/lib/st-diff-editor/st-monaco-diff-editor.component.scss":
/*!****************************************************************************************!*\
  !*** ./projects/st-editor/src/lib/st-diff-editor/st-monaco-diff-editor.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N0LWVkaXRvci9zcmMvbGliL3N0LWRpZmYtZWRpdG9yL0M6XFxVc2Vyc1xccjAyMDJcXFdvcmtzcGFjZVxcc3RyYXRpb1xcYW5ndWxhck1vbmFjb0VkaXRvci9wcm9qZWN0c1xcc3QtZWRpdG9yXFxzcmNcXGxpYlxcc3QtZGlmZi1lZGl0b3JcXHN0LW1vbmFjby1kaWZmLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3N0LWVkaXRvci9zcmMvbGliL3N0LWRpZmYtZWRpdG9yL3N0LW1vbmFjby1kaWZmLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL3N0LWVkaXRvci9zcmMvbGliL3N0LWRpZmYtZWRpdG9yL3N0LW1vbmFjby1kaWZmLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./projects/st-editor/src/lib/st-diff-editor/st-monaco-diff-editor.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/st-editor/src/lib/st-diff-editor/st-monaco-diff-editor.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StMonacoDiffEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StMonacoDiffEditorComponent", function() { return StMonacoDiffEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_editor_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/editor-base */ "./projects/st-editor/src/lib/shared/editor-base.ts");
/* harmony import */ var _models_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/editor */ "./projects/st-editor/src/lib/models/editor.ts");
/* harmony import */ var _st_monaco_editor_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../st-monaco-editor.config */ "./projects/st-editor/src/lib/st-monaco-editor.config.ts");
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




var StMonacoDiffEditorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StMonacoDiffEditorComponent, _super);
    function StMonacoDiffEditorComponent(_elementRef, editorConfig, _ngZone) {
        var _this = _super.call(this, _elementRef, editorConfig) || this;
        _this._elementRef = _elementRef;
        _this._ngZone = _ngZone;
        _this.theme = _models_editor__WEBPACK_IMPORTED_MODULE_3__["StEditorThemes"].vs;
        _this.minimapEnabled = true;
        _this.originalModel = '';
        _this.modifiedModel = '';
        _this.lineNumbers = 'on';
        _this.config = {};
        _this.codeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    StMonacoDiffEditorComponent.prototype.ngOnChanges = function () {
        if (this._codeEditorInstance) {
            this._codeEditorInstance.setModel({
                original: monaco.editor.createModel(this.originalModel, this.language),
                modified: monaco.editor.createModel(this.modifiedModel, this.language)
            });
        }
    };
    StMonacoDiffEditorComponent.prototype.initMonaco = function () {
        var _this = this;
        this._codeEditorInstance = monaco.editor.createDiffEditor(this._elementRef.nativeElement, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ automaticLayout: true, theme: this.theme, lineNumbers: this.lineNumbers, readOnly: this.readonly, minimap: {
                enabled: this.minimapEnabled
            } }, this.config));
        this._codeEditorInstance.setModel({
            original: monaco.editor.createModel(this.originalModel, this.language),
            modified: monaco.editor.createModel(this.modifiedModel, this.language)
        });
        this._codeEditorInstance.getModel().modified.onDidChangeContent(function (e) {
            _this._ngZone.run(function () {
                _this.codeChange.emit(_this._codeEditorInstance.getModel().modified.getValue());
            });
        });
    };
    StMonacoDiffEditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_st_monaco_editor_config__WEBPACK_IMPORTED_MODULE_4__["ST_MONACO_EDITOR_CONFIG"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StMonacoDiffEditorComponent.prototype, "language", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StMonacoDiffEditorComponent.prototype, "theme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoDiffEditorComponent.prototype, "minimapEnabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoDiffEditorComponent.prototype, "originalModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoDiffEditorComponent.prototype, "modifiedModel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoDiffEditorComponent.prototype, "lineNumbers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StMonacoDiffEditorComponent.prototype, "readonly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoDiffEditorComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoDiffEditorComponent.prototype, "codeChange", void 0);
    StMonacoDiffEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'st-monaco-diff-editor',
            template: '',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./st-monaco-diff-editor.component.scss */ "./projects/st-editor/src/lib/st-diff-editor/st-monaco-diff-editor.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_st_monaco_editor_config__WEBPACK_IMPORTED_MODULE_4__["ST_MONACO_EDITOR_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], StMonacoDiffEditorComponent);
    return StMonacoDiffEditorComponent;
}(_shared_editor_base__WEBPACK_IMPORTED_MODULE_2__["EditorBase"]));



/***/ }),

/***/ "./projects/st-editor/src/lib/st-editor-input/st-editor-input.component.scss":
/*!***********************************************************************************!*\
  !*** ./projects/st-editor/src/lib/st-editor-input/st-editor-input.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%;\n  display: block;\n  resize: vertical;\n  min-height: 140px;\n}\n.st-editor {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  min-height: inherit;\n}\n.st-editor__container {\n  border: 1px solid var(--st-editor_-_border-color, #b5b5b5);\n  font-weight: 400;\n  border-radius: 4px;\n  vertical-align: bottom;\n  box-sizing: border-box;\n  padding-right: 1px;\n  width: 100%;\n  flex: 1;\n  position: relative;\n  height: 100%;\n  padding-bottom: 1px;\n  display: flex;\n  flex-direction: column;\n}\n.st-editor__monaco {\n  flex: 1;\n  border-radius: 4px;\n}\n.st-editor__label {\n  font-weight: var(--st-editor_-_label-font-weight, 400);\n  font-size: var(--st-editor_-_label-font-size, 0.875rem);\n  color: var(--st-editor_-_label-color, #555555);\n  margin-bottom: var(--st-editor_-_label-margin-bottom, 5px);\n}\n.st-editor--error .st-editor__container {\n  border-color: var(--st-editor_-_border-color--error, #ec445c);\n}\n.st-editor--error .st-editor__label {\n  color: var(--st-editor_-_label-color--error, #ec445c);\n}\n.st-editor--active .st-editor__container {\n  border-color: var(--st-editor_-_border-color--focus, #88c5ee);\n}\n.st-editor--active .st-editor__label {\n  color: var(--st-editor_-_label-color--focus, #128bde);\n}\n.st-editor__monaco {\n  width: 100%;\n  height: 100%;\n}\n.resize-icon {\n  position: absolute;\n  overflow: hidden;\n  resize: vertical;\n  bottom: 0;\n  right: 0;\n  height: 10px;\n  width: 10px;\n  max-height: 10px;\n  min-height: 10px;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N0LWVkaXRvci9zcmMvbGliL3N0LWVkaXRvci1pbnB1dC9zdC1lZGl0b3ItaW5wdXQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9zdC1lZGl0b3Ivc3JjL2xpYi9zdC1lZGl0b3ItaW5wdXQvQzpcXFVzZXJzXFxyMDIwMlxcV29ya3NwYWNlXFxzdHJhdGlvXFxhbmd1bGFyTW9uYWNvRWRpdG9yL25vZGVfbW9kdWxlc1xcQHN0cmF0aW9cXGVnZW9cXHRoZW1lXFxjb25zdGFudHMuc2NzcyIsInByb2plY3RzL3N0LWVkaXRvci9zcmMvbGliL3N0LWVkaXRvci1pbnB1dC9DOlxcVXNlcnNcXHIwMjAyXFxXb3Jrc3BhY2VcXHN0cmF0aW9cXGFuZ3VsYXJNb25hY29FZGl0b3IvcHJvamVjdHNcXHN0LWVkaXRvclxcc3JjXFxsaWJcXHN0LWVkaXRvci1pbnB1dFxcc3QtZWRpdG9yLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VBQUE7QUFVQTs7Ozs7Ozs7O0VBQUE7QUE0RUE7Ozs7Ozs7OztFQUFBO0FBNENBOzs7Ozs7Ozs7RUFBQTtBQ2hJQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRndDRjtBRXJDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRndDRjtBRXRDRTtFQUNFLDBEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUZ3Q0o7QUVyQ0U7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUZ1Q0o7QUVwQ0U7RUFDRSxzREFBQTtFQUNBLHVEQUFBO0VBQ0EsOENBQUE7RUFDQSwwREFBQTtBRnNDSjtBRWxDSTtFQUNFLDZEQUFBO0FGb0NOO0FFakNJO0VBQ0UscURBQUE7QUZtQ047QUU5Qkk7RUFDRSw2REFBQTtBRmdDTjtBRTdCSTtFQUNFLHFEQUFBO0FGK0JOO0FFM0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUY2Qko7QUV4QkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FGMkJGIiwiZmlsZSI6InByb2plY3RzL3N0LWVkaXRvci9zcmMvbGliL3N0LWVkaXRvci1pbnB1dC9zdC1lZGl0b3ItaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgbWluLWhlaWdodDogMTQwcHg7XG59XG5cbi5zdC1lZGl0b3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG59XG4uc3QtZWRpdG9yX19jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdC1lZGl0b3JfLV9ib3JkZXItY29sb3IsICNiNWI1YjUpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN0LWVkaXRvcl9fbW9uYWNvIHtcbiAgZmxleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnN0LWVkaXRvcl9fbGFiZWwge1xuICBmb250LXdlaWdodDogdmFyKC0tc3QtZWRpdG9yXy1fbGFiZWwtZm9udC13ZWlnaHQsIDQwMCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3QtZWRpdG9yXy1fbGFiZWwtZm9udC1zaXplLCAwLjg3NXJlbSk7XG4gIGNvbG9yOiB2YXIoLS1zdC1lZGl0b3JfLV9sYWJlbC1jb2xvciwgIzU1NTU1NSk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXN0LWVkaXRvcl8tX2xhYmVsLW1hcmdpbi1ib3R0b20sIDVweCk7XG59XG4uc3QtZWRpdG9yLS1lcnJvciAuc3QtZWRpdG9yX19jb250YWluZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLXN0LWVkaXRvcl8tX2JvcmRlci1jb2xvci0tZXJyb3IsICNlYzQ0NWMpO1xufVxuLnN0LWVkaXRvci0tZXJyb3IgLnN0LWVkaXRvcl9fbGFiZWwge1xuICBjb2xvcjogdmFyKC0tc3QtZWRpdG9yXy1fbGFiZWwtY29sb3ItLWVycm9yLCAjZWM0NDVjKTtcbn1cbi5zdC1lZGl0b3ItLWFjdGl2ZSAuc3QtZWRpdG9yX19jb250YWluZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLXN0LWVkaXRvcl8tX2JvcmRlci1jb2xvci0tZm9jdXMsICM4OGM1ZWUpO1xufVxuLnN0LWVkaXRvci0tYWN0aXZlIC5zdC1lZGl0b3JfX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXN0LWVkaXRvcl8tX2xhYmVsLWNvbG9yLS1mb2N1cywgIzEyOGJkZSk7XG59XG4uc3QtZWRpdG9yX19tb25hY28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmVzaXplLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN2I1ZTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0OiMxMjhiZGUgIWRlZmF1bHQ7XG4kYWN0aW9uLXByaW1hcnktaG92ZXI6ICAjMDk3OWM0ICFkZWZhdWx0O1xuJGFjdGlvbi1wcmltYXJ5LWxpZ2h0OiAgI2U3ZjNmYiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTAxOiAgICNmM2Y2ZjggIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wMjogICAjZWFlZmY1ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDM6ICAgI2NkZDZkZiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA0OiAgICNhYWI3YzQgIWRlZmF1bHQ7XG4kYWN0aW9uLXNlY29uZGFyeS0wNTogICAjODg5OGE3ICFkZWZhdWx0O1xuJGFjdGlvbi1zZWNvbmRhcnktMDY6ICAgIzZjN2I4YiAhZGVmYXVsdDtcbiRhY3Rpb24tc2Vjb25kYXJ5LTA3OiAgICMwZjFiMjcgIWRlZmF1bHQ7XG5cbi8vIHN0YXR1czpcbiRzdGF0dXMtc3VjY2Vzcy1kZWZhdWx0OiAgICMyY2NlOTMgIWRlZmF1bHQ7XG4kc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6ICAgICAjZDRmOWVhICFkZWZhdWx0O1xuJHN0YXR1cy1zdWNjZXNzLWhvdmVyOiAgICAgIzBiYWE3MCAhZGVmYXVsdDtcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAgICNmYTkzMmYgIWRlZmF1bHQ7XG4kc3RhdHVzLXdhcm5pbmctbGlnaHQ6ICAgICAjZmZmMWUzICFkZWZhdWx0O1xuJHN0YXR1cy13YXJuaW5nLWhvdmVyOiAgICAgI2VkN2UxMyAhZGVmYXVsdDtcbiRzdGF0dXMtY3JpdGljYWwtZGVmYXVsdDogICNlYzQ0NWMgIWRlZmF1bHQ7XG4kc3RhdHVzLWNyaXRpY2FsLWxpZ2h0OiAgICAjZmZlOGViICFkZWZhdWx0O1xuJHN0YXR1cy1jcml0aWNhbC1ob3ZlcjogICAgI2M5MjUzYyAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsLTAwOiAjZmZmZmZmICFkZWZhdWx0O1xuJG5ldXRyYWwtMDE6ICNmYWZhZmEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wMjogI2Y0ZjRmNCAhZGVmYXVsdDtcbiRuZXV0cmFsLTAzOiAjZWRlZGVkICFkZWZhdWx0O1xuJG5ldXRyYWwtMDQ6ICNlNWU1ZTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wNTogI2RlZGVkZSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA2OiAjY2JjYmNiICFkZWZhdWx0O1xuJG5ldXRyYWwtMDc6ICNiNWI1YjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0wODogIzk5OTk5OSAhZGVmYXVsdDtcbiRuZXV0cmFsLTA5OiAjNzc3Nzc3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICM1NTU1NTUgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMTogIzNjM2MzYyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEyOiAjMjQyNDI0ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTM6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGlucHV0czpcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAgICM4OGM1ZWUgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtZXJyb3I6ICAgICAjZjU5ZWE5ICFkZWZhdWx0O1xuXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vLyBWQVJTOlxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBmb250LWZhbWlseTpcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xuXG4vLy8gZm9udC1zaXplOlxuJGVnZW8tZm9udC1zaXplLWdpYW50OiAgICAgMnJlbSAhZGVmYXVsdDsgICAgICAgLy8gMzJweFxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweFxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweFxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweFxuJGVnZW8tZm9udC1zaXplLWxhcmdlOiAgICAgMS4yNXJlbSAhZGVmYXVsdDsgICAgLy8gMjBweFxuJGVnZW8tZm9udC1zaXplLW1lZGl1bTogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMThweFxuJGVnZW8tZm9udC1zaXplLXNtYWxsOiAgICAgMXJlbSAhZGVmYXVsdDsgICAgICAgLy8gMTZweFxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweFxuJGVnZW8tZm9udC1zaXplLXh4c21hbGw6ICAgMC44NzVyZW0gIWRlZmF1bHQ7ICAgLy8gMTRweFxuJGVnZW8tZm9udC1zaXplLXh4eHNtYWxsOiAgMC43NXJlbSAhZGVmYXVsdDsgICAgLy8gMTJweFxuXG4vLy8gbGluZS1oZWlnaHQ6XG4kZWdlby1saW5lLWhlaWdodC1naWFudDogICAgICAyLjM3NXJlbSAhZGVmYXVsdDsgIC8vIDM4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweFxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4XG4kZWdlby1saW5lLWhlaWdodC14bGFyZ2U6ICAgICAxLjYyNXJlbSAhZGVmYXVsdDsgIC8vIDI2cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgIDEuNXJlbSAhZGVmYXVsdDsgICAgLy8gMjRweFxuJGVnZW8tbGluZS1oZWlnaHQtbWVkaXVtOiAgICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAvLyAyMnB4XG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LXhzbWFsbDogICAgIDEuMjVyZW0gIWRlZmF1bHQ7ICAgLy8gMjBweFxuJGVnZW8tbGluZS1oZWlnaHQteHhzbWFsbDogICAgMS4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAxOHB4XG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHhcblxuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcblxuXG5cblxuIiwiQGltcG9ydCAnfkBzdHJhdGlvL2VnZW8vdGhlbWUvY29uc3RhbnRzJztcclxuXHJcbjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG59XHJcblxyXG4uc3QtZWRpdG9yIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gICZfX2NvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdC1lZGl0b3JfLV9ib3JkZXItY29sb3IsICAkbmV1dHJhbC0wNyk7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAmX19tb25hY28ge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcblxyXG4gICZfX2xhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1zdC1lZGl0b3JfLV9sYWJlbC1mb250LXdlaWdodCwgNDAwKTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3QtZWRpdG9yXy1fbGFiZWwtZm9udC1zaXplLCAwLjg3NXJlbSk7XHJcbiAgICBjb2xvcjogdmFyKC0tc3QtZWRpdG9yXy1fbGFiZWwtY29sb3IsICRuZXV0cmFsLTEwKTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXN0LWVkaXRvcl8tX2xhYmVsLW1hcmdpbi1ib3R0b20sIDVweCk7XHJcbiAgfVxyXG5cclxuICAmLS1lcnJvciAmIHtcclxuICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3QtZWRpdG9yXy1fYm9yZGVyLWNvbG9yLS1lcnJvciwgJHN0YXR1cy1jcml0aWNhbC1kZWZhdWx0KVxyXG4gICAgfVxyXG5cclxuICAgICZfX2xhYmVsIHtcclxuICAgICAgY29sb3I6IHZhcigtLXN0LWVkaXRvcl8tX2xhYmVsLWNvbG9yLS1lcnJvciwgJHN0YXR1cy1jcml0aWNhbC1kZWZhdWx0KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi0tYWN0aXZlICYge1xyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdC1lZGl0b3JfLV9ib3JkZXItY29sb3ItLWZvY3VzLCAkaW5wdXQtZmllbGQtb25mb2N1cylcclxuICAgIH1cclxuXHJcbiAgICAmX19sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1zdC1lZGl0b3JfLV9sYWJlbC1jb2xvci0tZm9jdXMsICRhY3Rpb24tcHJpbWFyeS1kZWZhdWx0KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbW9uYWNvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5yZXNpemUtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwcHg7XHJcbiAgbWluLWhlaWdodDogMTBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./projects/st-editor/src/lib/st-editor-input/st-editor-input.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/st-editor/src/lib/st-editor-input/st-editor-input.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StEditorInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StEditorInputComponent", function() { return StEditorInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/editor */ "./projects/st-editor/src/lib/models/editor.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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





var StEditorInputComponent = /** @class */ (function () {
    function StEditorInputComponent(_document, _cd, _renderer) {
        this._document = _document;
        this._cd = _cd;
        this._renderer = _renderer;
        this.forceValidations = false;
        this.isFocused = false;
        this.errorMessages = {};
        this.resizable = true;
        this.readonly = false;
        this.validateJson = false;
        this.theme = _models_editor__WEBPACK_IMPORTED_MODULE_3__["StEditorThemes"].vs;
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDisabled = false; // To check disable
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._onDrag = this._onDrag.bind(this);
        this._onRelease = this._onRelease.bind(this);
    }
    StEditorInputComponent_1 = StEditorInputComponent;
    StEditorInputComponent.prototype.ngOnChanges = function (changes) {
        if (changes.value) {
            this.code = this.value;
        }
        if (changes.language) {
            this.monacoConfig = {
                language: this.language,
                automaticLayout: true,
                lineNumbersMinChars: 2,
                scrollBeyondLastLine: false
            };
        }
    };
    StEditorInputComponent.prototype.codeChange = function (value) {
        this.code = value;
        this.onChange(value);
    };
    StEditorInputComponent.prototype.writeValue = function (value) {
        var _value = value === null ? '' : value;
        this.code = _value;
        this._cd.markForCheck();
    };
    // Registry the change function to propagate internal model changes
    StEditorInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // Registry the touch function to propagate internal touch events
    StEditorInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Update current internal disabled state
     * @param isDisabled: new disabled state value
     */
    StEditorInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * Change input focus state and emits when its blurred
     * @param isFocused: new focus state
     */
    StEditorInputComponent.prototype.changeFocus = function (isFocused) {
        this.focus = isFocused;
        if (!isFocused) {
            this.blur.emit();
        }
    };
    StEditorInputComponent.prototype.validate = function (control) {
        var _this = this;
        setTimeout(function () { return _this._getErrorMessage(control.errors); });
        if (this.maxLength && control.value && control.value.length > this.maxLength) {
            return {
                maxLength: true
            };
        }
        if (this.minLength && control.value && control.value.length < this.minLength) {
            return {
                minLength: true
            };
        }
        if (this.validateJson) {
            try {
                JSON.parse(control.value);
            }
            catch (error) {
                return {
                    invalidJSON: error
                };
            }
        }
    };
    /**
     * Init resize dragging triggers
     * @param event: current mousedown event
     */
    StEditorInputComponent.prototype.onResize = function (event) {
        this._position = event.pageY;
        this._initialHeight = this.editor.nativeElement.offsetHeight;
        this._document.addEventListener('mousemove', this._onDrag);
        this._document.addEventListener('mouseup', this._onRelease);
    };
    /**
     * Set new height into editor textarea
     * @param e: mousemove event
     */
    StEditorInputComponent.prototype._onDrag = function (e) {
        // safe style update value with Renderer2
        this._renderer.setStyle(this.editor.nativeElement, 'height', (this._initialHeight - this._position + e.pageY) + 'px');
    };
    /**
     * Removes current document's mousemove and mouseup eventListeners
     */
    StEditorInputComponent.prototype._onRelease = function () {
        this._document.removeEventListener('mousemove', this._onDrag);
        this._document.removeEventListener('mouseup', this._onRelease);
    };
    StEditorInputComponent.prototype._getErrorMessage = function (errors) {
        var _this = this;
        this.errorMessage = '';
        this.hasErrors = false;
        if (errors && Object.keys(errors).length > 0) {
            this.hasErrors = true;
            // First, show required error message
            if (errors.required) {
                this.errorMessage = this.errorMessages['required'] || '';
            }
            else {
                Object.keys(errors).forEach(function (error) {
                    _this.errorMessage = _this.errorMessages[error] || '';
                    _this._cd.markForCheck();
                    return;
                });
            }
        }
        this._cd.markForCheck();
    };
    var StEditorInputComponent_1;
    StEditorInputComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StEditorInputComponent.prototype, "language", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StEditorInputComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StEditorInputComponent.prototype, "contextualHelp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StEditorInputComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StEditorInputComponent.prototype, "qaTag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StEditorInputComponent.prototype, "forceValidations", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StEditorInputComponent.prototype, "maxLength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StEditorInputComponent.prototype, "minLength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StEditorInputComponent.prototype, "isFocused", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StEditorInputComponent.prototype, "errorMessages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StEditorInputComponent.prototype, "resizable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StEditorInputComponent.prototype, "readonly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StEditorInputComponent.prototype, "validateJson", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StEditorInputComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StEditorInputComponent.prototype, "theme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StEditorInputComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StEditorInputComponent.prototype, "blur", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollElement', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StEditorInputComponent.prototype, "scrollElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editorElement', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StEditorInputComponent.prototype, "editor", void 0);
    StEditorInputComponent = StEditorInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'st-editor-input',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./st-editor-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/st-editor/src/lib/st-editor-input/st-editor-input.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return StEditorInputComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return StEditorInputComponent_1; }),
                    multi: true
                }
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./st-editor-input.component.scss */ "./projects/st-editor/src/lib/st-editor-input/st-editor-input.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], StEditorInputComponent);
    return StEditorInputComponent;
}());



/***/ }),

/***/ "./projects/st-editor/src/lib/st-editor/st-monaco-editor.component.scss":
/*!******************************************************************************!*\
  !*** ./projects/st-editor/src/lib/st-editor/st-monaco-editor.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("st-monaco-editor {\n  display: block;\n  width: 100%;\n  height: 200px;\n  position: relative;\n  background: white;\n}\nst-monaco-editor.st-input-mode {\n  /* Override monaco styles */\n}\nst-monaco-editor.st-input-mode .monaco-editor, st-monaco-editor.st-input-mode .monaco-editor .margin, st-monaco-editor.st-input-mode .monaco-editor .overflow-guard {\n  border-radius: 4px;\n}\nst-monaco-editor.st-input-mode .monaco-overlay {\n  background: rgba(100, 100, 100, 0.1);\n  top: 0;\n  left: 0;\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N0LWVkaXRvci9zcmMvbGliL3N0LWVkaXRvci9DOlxcVXNlcnNcXHIwMjAyXFxXb3Jrc3BhY2VcXHN0cmF0aW9cXGFuZ3VsYXJNb25hY29FZGl0b3IvcHJvamVjdHNcXHN0LWVkaXRvclxcc3JjXFxsaWJcXHN0LWVkaXRvclxcc3QtbW9uYWNvLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3N0LWVkaXRvci9zcmMvbGliL3N0LWVkaXRvci9zdC1tb25hY28tZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSwyQkFBQTtBQ0NKO0FEQUk7RUFDRSxrQkFBQTtBQ0VOO0FEQ0k7RUFDRSxvQ0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0NOIiwiZmlsZSI6InByb2plY3RzL3N0LWVkaXRvci9zcmMvbGliL3N0LWVkaXRvci9zdC1tb25hY28tZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3QtbW9uYWNvLWVkaXRvciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICYuc3QtaW5wdXQtbW9kZSB7XHJcbiAgICAvKiBPdmVycmlkZSBtb25hY28gc3R5bGVzICovXHJcbiAgICAubW9uYWNvLWVkaXRvciwgLm1vbmFjby1lZGl0b3IgLm1hcmdpbiwgLm1vbmFjby1lZGl0b3IgLm92ZXJmbG93LWd1YXJkIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb25hY28tb3ZlcmxheSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLDEwMCwxMDAsMC4xKTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJzdC1tb25hY28tZWRpdG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuc3QtbW9uYWNvLWVkaXRvci5zdC1pbnB1dC1tb2RlIHtcbiAgLyogT3ZlcnJpZGUgbW9uYWNvIHN0eWxlcyAqL1xufVxuc3QtbW9uYWNvLWVkaXRvci5zdC1pbnB1dC1tb2RlIC5tb25hY28tZWRpdG9yLCBzdC1tb25hY28tZWRpdG9yLnN0LWlucHV0LW1vZGUgLm1vbmFjby1lZGl0b3IgLm1hcmdpbiwgc3QtbW9uYWNvLWVkaXRvci5zdC1pbnB1dC1tb2RlIC5tb25hY28tZWRpdG9yIC5vdmVyZmxvdy1ndWFyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbnN0LW1vbmFjby1lZGl0b3Iuc3QtaW5wdXQtbW9kZSAubW9uYWNvLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMSk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./projects/st-editor/src/lib/st-editor/st-monaco-editor.component.ts":
/*!****************************************************************************!*\
  !*** ./projects/st-editor/src/lib/st-editor/st-monaco-editor.component.ts ***!
  \****************************************************************************/
/*! exports provided: StMonacoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StMonacoEditorComponent", function() { return StMonacoEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_editor_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/editor-base */ "./projects/st-editor/src/lib/shared/editor-base.ts");
/* harmony import */ var _models_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/editor */ "./projects/st-editor/src/lib/models/editor.ts");
/* harmony import */ var _st_monaco_editor_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../st-monaco-editor.config */ "./projects/st-editor/src/lib/st-monaco-editor.config.ts");
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





var StMonacoEditorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StMonacoEditorComponent, _super);
    function StMonacoEditorComponent(_elementRef, editorConfig, _ngZone) {
        var _this = _super.call(this, _elementRef, editorConfig) || this;
        _this._elementRef = _elementRef;
        _this._ngZone = _ngZone;
        _this.minimapEnabled = true;
        _this.config = {};
        _this.lineNumbers = 'on';
        _this.theme = _models_editor__WEBPACK_IMPORTED_MODULE_3__["StEditorThemes"].vs;
        _this.codeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.changeFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    StMonacoEditorComponent.prototype.ngOnChanges = function (changes) {
        if (this._codeEditorInstance) {
            if (changes.theme || changes.language || changes.config) {
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
    };
    StMonacoEditorComponent.prototype.ngOnDestroy = function () {
        if (this._codeEditorInstance) {
            this._codeEditorInstance.dispose();
        }
    };
    StMonacoEditorComponent.prototype.initMonaco = function () {
        var _this = this;
        var config = this._getConfig();
        if (this._codeEditorInstance) {
            this._codeEditorInstance.dispose();
        }
        this._ngZone.runOutsideAngular(function () {
            _this._codeEditorInstance = monaco.editor.create(_this._elementRef.nativeElement, config);
            _this._codeEditorInstance.getModel().onDidChangeContent(function (e) {
                var value = _this._codeEditorInstance.getValue();
                _this._ngZone.run(function () {
                    _this.codeChange.emit(value);
                    _this._currentCode = value;
                });
            });
            _this._codeEditorInstance.onDidFocusEditorText(function () {
                _this._ngZone.run(function () {
                    _this.changeFocus.emit(true);
                });
            });
            _this._codeEditorInstance.onDidBlurEditorText(function () {
                _this._ngZone.run(function () {
                    _this.changeFocus.emit(false);
                });
            });
        });
    };
    StMonacoEditorComponent.prototype._getConfig = function () {
        this._currentCode = this.code;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ automaticLayout: true, value: this.code, language: this.language, lineNumbers: this.lineNumbers, theme: this.theme, readOnly: this.readonly || this.disabled, minimap: {
                enabled: this.minimapEnabled
            } }, this.config);
    };
    StMonacoEditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_st_monaco_editor_config__WEBPACK_IMPORTED_MODULE_4__["ST_MONACO_EDITOR_CONFIG"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StMonacoEditorComponent.prototype, "code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StMonacoEditorComponent.prototype, "language", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoEditorComponent.prototype, "minimapEnabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoEditorComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoEditorComponent.prototype, "lineNumbers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StMonacoEditorComponent.prototype, "theme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StMonacoEditorComponent.prototype, "readonly", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StMonacoEditorComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoEditorComponent.prototype, "codeChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StMonacoEditorComponent.prototype, "changeFocus", void 0);
    StMonacoEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'st-monaco-editor',
            template: '<div class="monaco-overlay" *ngIf="disabled"></div>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./st-monaco-editor.component.scss */ "./projects/st-editor/src/lib/st-editor/st-monaco-editor.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_st_monaco_editor_config__WEBPACK_IMPORTED_MODULE_4__["ST_MONACO_EDITOR_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], StMonacoEditorComponent);
    return StMonacoEditorComponent;
}(_shared_editor_base__WEBPACK_IMPORTED_MODULE_2__["EditorBase"]));



/***/ }),

/***/ "./projects/st-editor/src/lib/st-monaco-editor.config.ts":
/*!***************************************************************!*\
  !*** ./projects/st-editor/src/lib/st-monaco-editor.config.ts ***!
  \***************************************************************/
/*! exports provided: ST_MONACO_EDITOR_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ST_MONACO_EDITOR_CONFIG", function() { return ST_MONACO_EDITOR_CONFIG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var ST_MONACO_EDITOR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ST_MONACO_EDITOR_CONFIG');


/***/ }),

/***/ "./projects/st-editor/src/lib/st-monaco-editor.module.ts":
/*!***************************************************************!*\
  !*** ./projects/st-editor/src/lib/st-monaco-editor.module.ts ***!
  \***************************************************************/
/*! exports provided: StMonacoEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StMonacoEditorModule", function() { return StMonacoEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _st_editor_st_monaco_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st-editor/st-monaco-editor.component */ "./projects/st-editor/src/lib/st-editor/st-monaco-editor.component.ts");
/* harmony import */ var _st_diff_editor_st_monaco_diff_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-diff-editor/st-monaco-diff-editor.component */ "./projects/st-editor/src/lib/st-diff-editor/st-monaco-diff-editor.component.ts");
/* harmony import */ var _st_editor_input_st_editor_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-editor-input/st-editor-input.component */ "./projects/st-editor/src/lib/st-editor-input/st-editor-input.component.ts");
/* harmony import */ var _st_monaco_editor_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./st-monaco-editor.config */ "./projects/st-editor/src/lib/st-monaco-editor.config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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







var StMonacoEditorModule = /** @class */ (function () {
    function StMonacoEditorModule() {
    }
    StMonacoEditorModule_1 = StMonacoEditorModule;
    StMonacoEditorModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: StMonacoEditorModule_1,
            providers: [{ provide: _st_monaco_editor_config__WEBPACK_IMPORTED_MODULE_5__["ST_MONACO_EDITOR_CONFIG"], useValue: config }],
        };
    };
    var StMonacoEditorModule_1;
    StMonacoEditorModule = StMonacoEditorModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _st_editor_st_monaco_editor_component__WEBPACK_IMPORTED_MODULE_2__["StMonacoEditorComponent"],
                _st_diff_editor_st_monaco_diff_editor_component__WEBPACK_IMPORTED_MODULE_3__["StMonacoDiffEditorComponent"],
                _st_editor_input_st_editor_input_component__WEBPACK_IMPORTED_MODULE_4__["StEditorInputComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]
            ],
            exports: [
                _st_editor_st_monaco_editor_component__WEBPACK_IMPORTED_MODULE_2__["StMonacoEditorComponent"],
                _st_diff_editor_st_monaco_diff_editor_component__WEBPACK_IMPORTED_MODULE_3__["StMonacoDiffEditorComponent"],
                _st_editor_input_st_editor_input_component__WEBPACK_IMPORTED_MODULE_4__["StEditorInputComponent"]
            ],
            providers: []
        })
    ], StMonacoEditorModule);
    return StMonacoEditorModule;
}());



/***/ }),

/***/ "./projects/st-editor/src/public-api.ts":
/*!**********************************************!*\
  !*** ./projects/st-editor/src/public-api.ts ***!
  \**********************************************/
/*! exports provided: StMonacoEditorComponent, StMonacoDiffEditorComponent, StEditorInputComponent, StMonacoEditorModule, StEditorThemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_st_editor_st_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/st-editor/st-monaco-editor.component */ "./projects/st-editor/src/lib/st-editor/st-monaco-editor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StMonacoEditorComponent", function() { return _lib_st_editor_st_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__["StMonacoEditorComponent"]; });

/* harmony import */ var _lib_st_diff_editor_st_monaco_diff_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/st-diff-editor/st-monaco-diff-editor.component */ "./projects/st-editor/src/lib/st-diff-editor/st-monaco-diff-editor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StMonacoDiffEditorComponent", function() { return _lib_st_diff_editor_st_monaco_diff_editor_component__WEBPACK_IMPORTED_MODULE_2__["StMonacoDiffEditorComponent"]; });

/* harmony import */ var _lib_st_editor_input_st_editor_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/st-editor-input/st-editor-input.component */ "./projects/st-editor/src/lib/st-editor-input/st-editor-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StEditorInputComponent", function() { return _lib_st_editor_input_st_editor_input_component__WEBPACK_IMPORTED_MODULE_3__["StEditorInputComponent"]; });

/* harmony import */ var _lib_st_monaco_editor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/st-monaco-editor.module */ "./projects/st-editor/src/lib/st-monaco-editor.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StMonacoEditorModule", function() { return _lib_st_monaco_editor_module__WEBPACK_IMPORTED_MODULE_4__["StMonacoEditorModule"]; });

/* harmony import */ var _lib_models_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/models/editor */ "./projects/st-editor/src/lib/models/editor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StEditorThemes", function() { return _lib_models_editor__WEBPACK_IMPORTED_MODULE_5__["StEditorThemes"]; });

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








/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.app {\n  flex: 1;\n  overflow: auto;\n}\n\n.app .container {\n  height: 100%;\n}\n\n.app__container {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxyMDIwMlxcV29ya3NwYWNlXFxzdHJhdGlvXFxhbmd1bGFyTW9uYWNvRWRpdG9yL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxPQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFwcCB7XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYXBwIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYXBwIC5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYXBwX19jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/header/header.module */ "./src/app/layout/header/header.module.ts");
/* harmony import */ var _modules_simple_editor_simple_editor_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/simple-editor/simple-editor.module */ "./src/app/modules/simple-editor/simple-editor.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _modules_diff_editor_diff_editor_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/diff-editor/diff-editor.module */ "./src/app/modules/diff-editor/diff-editor.module.ts");
/* harmony import */ var _modules_input_editor_input_editor_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/input-editor/input-editor.module */ "./src/app/modules/input-editor/input-editor.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _layout_header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_8__["routes"], { useHash: true }),
                _modules_diff_editor_diff_editor_module__WEBPACK_IMPORTED_MODULE_9__["DiffEditorModule"],
                _modules_simple_editor_simple_editor_module__WEBPACK_IMPORTED_MODULE_6__["SimpleEditorModule"],
                _modules_input_editor_input_editor_module__WEBPACK_IMPORTED_MODULE_10__["InputEditorModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modules_simple_editor_simple_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/simple-editor/simple-editor.component */ "./src/app/modules/simple-editor/simple-editor.component.ts");
/* harmony import */ var _modules_diff_editor_diff_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/diff-editor/diff-editor.component */ "./src/app/modules/diff-editor/diff-editor.component.ts");
/* harmony import */ var _modules_input_editor_input_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/input-editor/input-editor.component */ "./src/app/modules/input-editor/input-editor.component.ts");




var routes = [
    {
        path: '',
        component: _modules_simple_editor_simple_editor_component__WEBPACK_IMPORTED_MODULE_1__["SimpleEditorComponent"]
    },
    {
        path: 'diff-editor',
        component: _modules_diff_editor_diff_editor_component__WEBPACK_IMPORTED_MODULE_2__["DiffEditorComponent"]
    },
    {
        path: 'input-editor',
        component: _modules_input_editor_input_editor_component__WEBPACK_IMPORTED_MODULE_3__["InputEditorComponent"]
    }
];


/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.navbar {\n  background-color: #68217a;\n  width: 100%;\n}\n\n.navbar__content {\n  width: 100%;\n}\n\n.navbar__logo {\n  padding: 10px 12px 10px 0px;\n  display: block;\n  float: left;\n}\n\n.navbar__logo a {\n  color: #fff;\n  font-size: 22px;\n  letter-spacing: -1px;\n}\n\n.navbar__menu {\n  float: right;\n  margin-top: 14px;\n}\n\n.navbar__menu li {\n  display: inline-block;\n  margin-left: 20px;\n}\n\n.navbar__menu a {\n  color: white;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9DOlxcVXNlcnNcXHIwMjAyXFxXb3Jrc3BhY2VcXHN0cmF0aW9cXGFuZ3VsYXJNb25hY29FZGl0b3Ivc3JjXFxhcHBcXGxheW91dFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQU47O0FESUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURJSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUNGTjs7QURLSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODIxN2E7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19sb2dvIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweCAxMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4MjE3YTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2YmFyX19jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2YmFyX19sb2dvIHtcbiAgcGFkZGluZzogMTBweCAxMnB4IDEwcHggMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyX19sb2dvIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbi5uYXZiYXJfX21lbnUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG4ubmF2YmFyX19tZW51IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5uYXZiYXJfX21lbnUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/header/header.module.ts ***!
  \************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            providers: [],
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/modules/diff-editor/diff-editor.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/diff-editor/diff-editor.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor-example {\n  margin-top: 20px;\n  height: calc(100vh - 200px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kaWZmLWVkaXRvci9DOlxcVXNlcnNcXHIwMjAyXFxXb3Jrc3BhY2VcXHN0cmF0aW9cXGFuZ3VsYXJNb25hY29FZGl0b3Ivc3JjXFxhcHBcXG1vZHVsZXNcXGRpZmYtZWRpdG9yXFxkaWZmLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kaWZmLWVkaXRvci9kaWZmLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGlmZi1lZGl0b3IvZGlmZi1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yLWV4YW1wbGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xyXG59XHJcbiIsIi5lZGl0b3ItZXhhbXBsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/diff-editor/diff-editor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/diff-editor/diff-editor.component.ts ***!
  \**************************************************************/
/*! exports provided: DiffEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffEditorComponent", function() { return DiffEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiffEditorComponent = /** @class */ (function () {
    function DiffEditorComponent() {
        this.language = 'json';
        this.originalModel = ("{\n    \"$id\": \"https://example.com/person.schema.json\",\n    \"$schema\": \"http://json-schema.org/draft-07/schema#\",\n    \"title\": \"Person\",\n    \"type\": \"object\",\n    \"properties\": {\n      \"firstName\": {\n        \"type\": \"string\",\n        \"description\": \"First name.\"\n      },\n      \"lastName\": {\n        \"type\": \"string\",\n        \"description\": \"Last name.\"\n      }\n    }\n  }");
        this.modifiedModel = "{\n    \"$id\": \"https://example.com/person.schema.json\",\n    \"$schema\": \"http://json-schema.org/draft-07/schema#\",\n    \"title\": \"Person\",\n    \"type\": \"object\",\n    \"properties\": {\n      \"firstName\": {\n        \"type\": \"string\",\n        \"description\": \"First name.\"\n      },\n      \"lastName\": {\n        \"type\": \"string\",\n        \"description\": \"Last name description.\"\n      },\n      \"age\": {\n        \"description\": \"Age in years\",\n        \"type\": \"integer\",\n        \"minimum\": 0\n      }\n    }\n  }";
    }
    DiffEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diff-editor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diff-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/diff-editor/diff-editor.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diff-editor.component.scss */ "./src/app/modules/diff-editor/diff-editor.component.scss")).default]
        })
    ], DiffEditorComponent);
    return DiffEditorComponent;
}());



/***/ }),

/***/ "./src/app/modules/diff-editor/diff-editor.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/diff-editor/diff-editor.module.ts ***!
  \***********************************************************/
/*! exports provided: DiffEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffEditorModule", function() { return DiffEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _diff_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diff-editor.component */ "./src/app/modules/diff-editor/diff-editor.component.ts");
/* harmony import */ var _stratio_st_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stratio/st-monaco-editor */ "./projects/st-editor/src/public-api.ts");





var DiffEditorModule = /** @class */ (function () {
    function DiffEditorModule() {
    }
    DiffEditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_diff_editor_component__WEBPACK_IMPORTED_MODULE_3__["DiffEditorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _stratio_st_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["StMonacoEditorModule"]
            ],
            exports: [_diff_editor_component__WEBPACK_IMPORTED_MODULE_3__["DiffEditorComponent"]],
            providers: [],
        })
    ], DiffEditorModule);
    return DiffEditorModule;
}());



/***/ }),

/***/ "./src/app/modules/input-editor/input-editor.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/input-editor/input-editor.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor-example {\n  height: calc(100vh - 200px);\n}\n\n.editor-input__buttons {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9pbnB1dC1lZGl0b3IvQzpcXFVzZXJzXFxyMDIwMlxcV29ya3NwYWNlXFxzdHJhdGlvXFxhbmd1bGFyTW9uYWNvRWRpdG9yL3NyY1xcYXBwXFxtb2R1bGVzXFxpbnB1dC1lZGl0b3JcXGlucHV0LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9pbnB1dC1lZGl0b3IvaW5wdXQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRjs7QURJRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9pbnB1dC1lZGl0b3IvaW5wdXQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvci1leGFtcGxlIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XHJcbn1cclxuXHJcbi5lZGl0b3ItaW5wdXQge1xyXG5cclxuICAmX19idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxufVxyXG4iLCIuZWRpdG9yLWV4YW1wbGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7XG59XG5cbi5lZGl0b3ItaW5wdXRfX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/input-editor/input-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/input-editor/input-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: InputEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputEditorComponent", function() { return InputEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var InputEditorComponent = /** @class */ (function () {
    function InputEditorComponent() {
        this.errorMessages = {
            required: 'This field is required',
            invalidJSON: 'JSON format is invalid'
        };
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("{\n      \"appName\": \"App1\",\n      \"widget\": {\n        \"debug\": \"on\",\n        \"window\": {\n            \"title\": \"Sample Konfabulator Widget\",\n            \"name\": \"main_window\",\n            \"width\": 500,\n            \"height\": 500\n        },\n        \"image\": {\n            \"src\": \"Images/Sun.png\",\n            \"name\": \"sun1\",\n            \"hOffset\": 250,\n            \"vOffset\": 250,\n            \"alignment\": \"center\"\n        },\n        \"text\": {\n            \"data\": \"Click Here\",\n            \"size\": 36,\n            \"style\": \"bold\",\n            \"name\": \"text1\",\n            \"hOffset\": 250,\n            \"vOffset\": 100,\n            \"alignment\": \"center\",\n            \"onMouseUp\": \"sun1.opacity = (sun1.opacity / 100) * 90;\"\n        }\n      }\n    }", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    InputEditorComponent.prototype.setValue = function () {
        this.formControl.setValue("{\n        \"data\": \"Click Here\",\n        \"size\": 36,\n        \"style\": \"bold\",\n        \"name\": \"text1\",\n        \"hOffset\": 250,\n        \"vOffset\": 100,\n        \"alignment\": \"center\",\n        \"onMouseUp\": \"sun1.opacity = (sun1.opacity / 100) * 90;\"\n      }");
    };
    InputEditorComponent.prototype.reset = function () {
        this.formControl.reset();
    };
    InputEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-editor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/input-editor/input-editor.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-editor.component.scss */ "./src/app/modules/input-editor/input-editor.component.scss")).default]
        })
    ], InputEditorComponent);
    return InputEditorComponent;
}());



/***/ }),

/***/ "./src/app/modules/input-editor/input-editor.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/input-editor/input-editor.module.ts ***!
  \*************************************************************/
/*! exports provided: InputEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputEditorModule", function() { return InputEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-editor.component */ "./src/app/modules/input-editor/input-editor.component.ts");
/* harmony import */ var _stratio_st_monaco_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stratio/st-monaco-editor */ "./projects/st-editor/src/public-api.ts");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stratio/egeo */ "./node_modules/@stratio/egeo/fesm5/stratio-egeo.js");







var InputEditorModule = /** @class */ (function () {
    function InputEditorModule() {
    }
    InputEditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_input_editor_component__WEBPACK_IMPORTED_MODULE_4__["InputEditorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _stratio_st_monaco_editor__WEBPACK_IMPORTED_MODULE_5__["StMonacoEditorModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_6__["StTextareaModule"]
            ],
            exports: [_input_editor_component__WEBPACK_IMPORTED_MODULE_4__["InputEditorComponent"]],
            providers: [],
        })
    ], InputEditorModule);
    return InputEditorModule;
}());



/***/ }),

/***/ "./src/app/modules/simple-editor/simple-editor.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/simple-editor/simple-editor.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor-example {\n  height: calc(100vh - 200px);\n}\n\nselect {\n  margin: 20px 0;\n  margin-right: 30px;\n}\n\n.option {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.option__label {\n  float: left;\n  margin-top: 28px;\n  margin-right: 10px;\n}\n\n.option__checkbox {\n  display: inline-block;\n  margin-top: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaW1wbGUtZWRpdG9yL0M6XFxVc2Vyc1xccjAyMDJcXFdvcmtzcGFjZVxcc3RyYXRpb1xcYW5ndWxhck1vbmFjb0VkaXRvci9zcmNcXGFwcFxcbW9kdWxlc1xcc2ltcGxlLWVkaXRvclxcc2ltcGxlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaW1wbGUtZWRpdG9yL3NpbXBsZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaW1wbGUtZWRpdG9yL3NpbXBsZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yLWV4YW1wbGUge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cclxuICAmX19sYWJlbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmX19jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi5lZGl0b3ItZXhhbXBsZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbn1cblxuc2VsZWN0IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLm9wdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5vcHRpb25fX2xhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5vcHRpb25fX2NoZWNrYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAyN3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/simple-editor/simple-editor.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/simple-editor/simple-editor.component.ts ***!
  \******************************************************************/
/*! exports provided: SimpleEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEditorComponent", function() { return SimpleEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _simple_editor_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-editor.models */ "./src/app/modules/simple-editor/simple-editor.models.ts");
/* harmony import */ var _stratio_st_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stratio/st-monaco-editor */ "./projects/st-editor/src/public-api.ts");





var SimpleEditorComponent = /** @class */ (function () {
    function SimpleEditorComponent() {
        this.languageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('typescript');
        this.initCodes = {
            typescript: _simple_editor_models__WEBPACK_IMPORTED_MODULE_3__["tsExample"],
            json: _simple_editor_models__WEBPACK_IMPORTED_MODULE_3__["jsonExample"],
            css: _simple_editor_models__WEBPACK_IMPORTED_MODULE_3__["cssExample"],
            sql: _simple_editor_models__WEBPACK_IMPORTED_MODULE_3__["sqlExample"],
            python: ''
        };
        this.themeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_stratio_st_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["StEditorThemes"].vsDark);
        this.themes = _stratio_st_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["StEditorThemes"];
        this.minimapControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true);
        this.readonlyControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
    }
    SimpleEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-editor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simple-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/simple-editor/simple-editor.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simple-editor.component.scss */ "./src/app/modules/simple-editor/simple-editor.component.scss")).default]
        })
    ], SimpleEditorComponent);
    return SimpleEditorComponent;
}());



/***/ }),

/***/ "./src/app/modules/simple-editor/simple-editor.models.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/simple-editor/simple-editor.models.ts ***!
  \***************************************************************/
/*! exports provided: tsExample, cssExample, sqlExample, jsonExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsExample", function() { return tsExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssExample", function() { return cssExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlExample", function() { return sqlExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonExample", function() { return jsonExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var tsExample = "/**\n* The Flyweight stores a common portion of the state (also called intrinsic\n* state) that belongs to multiple real business entities. The Flyweight accepts\n* the rest of the state (extrinsic state, unique for each entity) via its\n* method parameters.\n*/\nclass Flyweight {\n   private sharedState: any;\n\n   constructor(sharedState: any) {\n       this.sharedState = sharedState;\n   }\n\n   public operation(uniqueState): void {\n       const s = JSON.stringify(this.sharedState);\n       const u = JSON.stringify(uniqueState);\n   }\n}\n\n/**\n* The Flyweight Factory creates and manages the Flyweight objects. It ensures\n* that flyweights are shared correctly. When the client requests a flyweight,\n* the factory either returns an existing instance or creates a new one, if it\n* doesn't exist yet.\n*/\nclass FlyweightFactory {\n   private flyweights: {[key: string]: Flyweight} = <any>{};\n\n   constructor(initialFlyweights: string[][]) {\n       for (const state of initialFlyweights) {\n           this.flyweights[this.getKey(state)] = new Flyweight(state);\n       }\n   }\n\n   /**\n    * Returns a Flyweight's string hash for a given state.\n    */\n   private getKey(state: string[]): string {\n       return state.join('_');\n   }\n\n   /**\n    * Returns an existing Flyweight with a given state or creates a new one.\n    */\n   public getFlyweight(sharedState: string[]): Flyweight {\n       const key = this.getKey(sharedState);\n\n       if (!(key in this.flyweights)) {\n           this.flyweights[key] = new Flyweight(sharedState);\n       } else {\n           console.log('FlyweightFactory: Reusing existing flyweight.');\n       }\n\n       return this.flyweights[key];\n   }\n\n   public listFlyweights(): void {\n       const count = Object.keys(this.flyweights).length;\n       for (const key in this.flyweights) {\n           console.log(key);\n       }\n   }\n}\n\n/**\n* The client code usually creates a bunch of pre-populated flyweights in the\n* initialization stage of the application.\n*/\nconst factory = new FlyweightFactory([\n   ['Chevrolet', 'Camaro2018', 'pink'],\n   ['Mercedes Benz', 'C300', 'black'],\n   ['Mercedes Benz', 'C500', 'red'],\n   ['BMW', 'M5', 'red'],\n   ['BMW', 'X6', 'white'],\n   // ...\n]);\nfactory.listFlyweights();\n\n// ...\n\nfunction addCarToPoliceDatabase(\n   ff: FlyweightFactory, plates: string, owner: string,\n   brand: string, model: string, color: string,\n) {\n   const flyweight = ff.getFlyweight([brand, model, color]);\n\n   // The client code either stores or calculates extrinsic state and passes it\n   // to the flyweight's methods.\n   flyweight.operation([plates, owner]);\n}\n\naddCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');\n\naddCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');\n\nfactory.listFlyweights();\n\n";
var cssExample = ".button {\n\tdisplay: inline-block;\n\tborder-radius: 3px;\n\tpadding: 7px 12px;\n\tborder: 1px solid #D5D5D5;\n\tbackground-image: linear-gradient(#EEE, #DDD);\n\tfont: 700 13px/18px Helvetica, arial;\n}\n.button--state-success {\n\tcolor: #FFF;\n\tbackground: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;\n\tborder-color: #4A993E;\n}\n.button--state-danger {\n\tcolor: #900;\n}\n";
var sqlExample = "select studentID, FullName, sat_score, recordUpdated\nfrom student\nwhere (\nstudentID between 1 and 5\nor studentID = 8\n    or FullName like '%Maximo%'\n)\nand sat_score NOT in (1000, 1400);\n";
var jsonExample = "{\n  \"glossary\": {\n    \"title\": \"example glossary\",\n    \"GlossDiv\": {\n      \"title\": \"S\",\n      \"GlossList\": {\n        \"GlossEntry\": {\n        \"ID\": \"SGML\",\n        \"SortAs\": \"SGML\",\n        \"GlossTerm\": \"Standard Generalized Markup Language\",\n        \"Acronym\": \"SGML\",\n        \"Abbrev\": \"ISO 8879:1986\",\n        \"GlossDef\": {\n          \"para\": \"A meta-markup language, used to create markup languages such as DocBook.\",\n          \"GlossSeeAlso\": [\"GML\", \"XML\"]\n        },\n        \"GlossSee\": \"markup\"\n      }\n    }\n    }\n  }\n}";


/***/ }),

/***/ "./src/app/modules/simple-editor/simple-editor.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/simple-editor/simple-editor.module.ts ***!
  \***************************************************************/
/*! exports provided: SimpleEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEditorModule", function() { return SimpleEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stratio/egeo */ "./node_modules/@stratio/egeo/fesm5/stratio-egeo.js");
/* harmony import */ var _simple_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-editor.component */ "./src/app/modules/simple-editor/simple-editor.component.ts");
/* harmony import */ var _stratio_st_monaco_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stratio/st-monaco-editor */ "./projects/st-editor/src/public-api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SimpleEditorModule = /** @class */ (function () {
    function SimpleEditorModule() {
    }
    SimpleEditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_simple_editor_component__WEBPACK_IMPORTED_MODULE_4__["SimpleEditorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StCheckboxModule"],
                _stratio_st_monaco_editor__WEBPACK_IMPORTED_MODULE_5__["StMonacoEditorModule"]
            ],
            exports: [_simple_editor_component__WEBPACK_IMPORTED_MODULE_4__["SimpleEditorComponent"]],
            providers: [],
        })
    ], SimpleEditorModule);
    return SimpleEditorModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\r0202\Workspace\stratio\angularMonacoEditor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map