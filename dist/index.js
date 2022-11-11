"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router_1 = __importDefault(require("./Router"));
const app = (0, express_1.default)();
const port = 3005;
app.use(express_1.default.static(__dirname + '/assets/resized'));
app.use('/api', Router_1.default);
app.listen(port, () => {
    try {
        console.log(`server runnig on port ${port}`);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = app;
