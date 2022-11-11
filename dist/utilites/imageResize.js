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
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
const filePath = __dirname + '/assets/full/';
const fileDist = __dirname + '\\assets\\resized\\';
const imageResize = (path, height, width) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //reading the image
        const image = yield fs_1.promises.readFile(filePath + path);
        //resizing the image
        const resized = yield (0, sharp_1.default)(image).resize(height, width).toBuffer();
        //opening the distination file to save the image after the resizing
        const myfile = yield fs_1.promises.open(fileDist + path, 'w+');
        //saving the image to the distination file
        yield myfile.write(resized);
        myfile.close();
        console.log('image has been resized and saved ');
        return true;
    }
    catch (error) {
        return false;
    }
});
exports.default = imageResize;
