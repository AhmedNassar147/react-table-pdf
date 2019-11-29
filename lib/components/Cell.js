"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var styles_1 = __importDefault(require("./styles"));
var utils_1 = require("./utils");
var useMemo = react_1.default.useMemo;
var TableCell = function (_a) {
    var noBorder = _a.noBorder, children = _a.children, style = _a.style;
    var expensiveStyle = useMemo(function () {
        var cellOtherStyles = styles_1.default.cellOtherStyles;
        return !noBorder ? cellOtherStyles : renderer_1.StyleSheet.create({});
    }, [noBorder]);
    var addtionalStyle = useMemo(function () { return utils_1.renderStyleProps(style); }, [style]);
    return (react_1.default.createElement(renderer_1.View, { wrap: true, style: [styles_1.default.cellStyle, expensiveStyle, addtionalStyle] },
        react_1.default.createElement(renderer_1.Text, null, children)));
};
exports.default = react_1.default.memo(TableCell);
//# sourceMappingURL=Cell.js.map