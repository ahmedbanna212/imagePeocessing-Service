"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cacheChecker_1 = __importDefault(require("../utilites/cacheChecker"));
const imageResize_1 = __importDefault(require("../utilites/imageResize"));
const node_cache_1 = __importDefault(require("node-cache"));
const urlQuery = 'filename=ahmed&&width=300&&height=600';
describe('checking the the middleware functions', () => {
    beforeAll(function () {
        const myCache = new node_cache_1.default();
        myCache.set('query', urlQuery);
    });
    it('checks if the resize function would work with correct paramters', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, imageResize_1.default)('salah.jpg', 100, 100);
        expect(result).toBeTruthy();
    }));
    it('checks if the resize function would work with incorrect paramters', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, imageResize_1.default)('s.jpg', 200, 200);
        expect(result).toBeFalsy();
    }));
    it('to check if the requested urlquery is the same is the one cahced previously', () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, cacheChecker_1.default)(urlQuery)).toBeTruthy;
    }));
});
