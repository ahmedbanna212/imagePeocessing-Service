"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const processor_1 = __importDefault(require("../../utilites/processor"));
const image = express_1.default.Router();
image.get('/', processor_1.default, () => {
    console.log('------------the route of image processer---------');
});
exports.default = image;
