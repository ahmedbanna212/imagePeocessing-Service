"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheChecker = void 0;
const processor_1 = require("./processor");
const cacheChecker = (query) => {
    if (processor_1.myCache.has('query') && processor_1.myCache.get('query') == query) {
        console.log('image is in cache');
        return true;
    }
    else {
        return false;
    }
};
exports.cacheChecker = cacheChecker;
exports.default = exports.cacheChecker;
