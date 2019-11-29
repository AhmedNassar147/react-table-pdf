"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var App = function (props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, props.text)));
};
App.defaultProps = {
    text: "hello"
};
//# sourceMappingURL=index.js.map