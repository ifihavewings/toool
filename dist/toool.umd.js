(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.toool = {}));
})(this, (function (exports) { 'use strict';

    function greet(name) {
        return "Hello, ".concat(name, "!");
    }

    exports.greet = greet;

}));
