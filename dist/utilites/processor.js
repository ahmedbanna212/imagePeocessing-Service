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
exports.myCache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const paramExtract_1 = __importDefault(require("./paramExtract"));
const cacheChecker_1 = __importDefault(require("./cacheChecker"));
const imageResize_1 = __importDefault(require("./imageResize"));
exports.myCache = new node_cache_1.default();
const processor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // extracting the query from the url
    const urlQuery = req.url.split('?')[1];
    //cacheing the query
    const cache = (0, cacheChecker_1.default)(urlQuery);
    exports.myCache.set('query', urlQuery);
    const params = (0, paramExtract_1.default)(urlQuery);
    //checking if the query checker is set to true or there is an error
    if (cache && params != null) {
        res
            .status(200)
            .sendFile(`${__dirname}\\assets\\resized\\${params.filename}.jpg`);
        console.log('data coming from cach');
    }
    else if (params != null && !cache) {
        if (isNaN(parseInt(params.width)) || isNaN(parseInt(params.height))) {
            res.status(400).send('width or height are not correct');
        }
        else {
            const imageCondition = yield (0, imageResize_1.default)(params.filename + '.jpg', parseInt(params.width), parseInt(params.height));
            if (imageCondition) {
                res
                    .status(200)
                    .sendFile(`${__dirname}\\assets\\resized\\${params.filename}.jpg`);
            }
            else {
                res.status(400).send('file name is incorrect');
            }
        }
    }
    else {
        res
            .status(400)
            .send('please re-type the query paramters as some paramters are missing');
    }
    next();
});
exports.default = processor;
