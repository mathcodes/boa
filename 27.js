(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.js ***!
  \**********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '--',\r\n        blockComment: ['--[[', ']]'],\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' },\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: '\\'', close: '\\'' },\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.lua',\r\n    keywords: [\r\n        'and', 'break', 'do', 'else', 'elseif',\r\n        'end', 'false', 'for', 'function', 'goto', 'if',\r\n        'in', 'local', 'nil', 'not', 'or',\r\n        'repeat', 'return', 'then', 'true', 'until',\r\n        'while'\r\n    ],\r\n    brackets: [\r\n        { token: 'delimiter.bracket', open: '{', close: '}' },\r\n        { token: 'delimiter.array', open: '[', close: ']' },\r\n        { token: 'delimiter.parenthesis', open: '(', close: ')' }\r\n    ],\r\n    operators: [\r\n        '+', '-', '*', '/', '%', '^', '#', '==', '~=', '<=', '>=', '<', '>', '=',\r\n        ';', ':', ',', '.', '..', '...'\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\r\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [/[a-zA-Z_]\\w*/, {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': 'identifier'\r\n                    }\r\n                }],\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // keys\r\n            [/(,)(\\s*)([a-zA-Z_]\\w*)(\\s*)(:)(?!:)/, ['delimiter', '', 'key', '', 'delimiter']],\r\n            [/({)(\\s*)([a-zA-Z_]\\w*)(\\s*)(:)(?!:)/, ['@brackets', '', 'key', '', 'delimiter']],\r\n            // delimiters and operators\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/@symbols/, {\r\n                    cases: {\r\n                        '@operators': 'delimiter',\r\n                        '@default': ''\r\n                    }\r\n                }],\r\n            // numbers\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],\r\n            [/\\d+?/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter'],\r\n            // strings: recover on non-terminated strings\r\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/\"/, 'string', '@string.\"'],\r\n            [/'/, 'string', '@string.\\''],\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            [/--\\[([=]*)\\[/, 'comment', '@comment.$1'],\r\n            [/--.*$/, 'comment'],\r\n        ],\r\n        comment: [\r\n            [/[^\\]]+/, 'comment'],\r\n            [/\\]([=]*)\\]/, {\r\n                    cases: {\r\n                        '$1==$S2': { token: 'comment', next: '@pop' },\r\n                        '@default': 'comment'\r\n                    }\r\n                }],\r\n            [/./, 'comment']\r\n        ],\r\n        string: [\r\n            [/[^\\\\\"']+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [/[\"']/, {\r\n                    cases: {\r\n                        '$#==$S2': { token: 'string', next: '@pop' },\r\n                        '@default': 'string'\r\n                    }\r\n                }]\r\n        ],\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.js?");

/***/ })

}]);