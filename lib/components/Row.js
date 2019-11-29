"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var styles_1 = __importDefault(require("./styles"));
var Cell_1 = __importDefault(require("./Cell"));
var utils_1 = require("./utils");
var useMemo = react_1.default.useMemo, memo = react_1.default.memo, useCallback = react_1.default.useCallback;
var TableRow = function (_a) {
    var isHeader = _a.isHeader, children = _a.children, style = _a.style;
    var expensiveStyle = useMemo(function () {
        var headerRowStyle = styles_1.default.headerRowStyle, simpleRowStyle = styles_1.default.simpleRowStyle;
        return isHeader ? headerRowStyle : simpleRowStyle;
    }, [isHeader]);
    var cellRenderer = useCallback(function (cellItem, idx, length) {
        if (typeof cellItem === "object" && Array.isArray(cellItem)) {
            return (react_1.default.createElement(renderer_1.View, { style: styles_1.default.cellsWrapper, key: idx.toString() }, cellItem.map(function (item, childKey) {
                return cellRenderer(item, childKey, length);
            })));
        }
        else {
            var title = cellItem.title, key = cellItem.key;
            return (react_1.default.createElement(Cell_1.default, { noBorder: length - 1 === idx, key: key || idx.toString(), children: title }));
        }
    }, []);
    var addtionalStyle = useMemo(function () { return utils_1.renderStyleProps(style); }, [style]);
    var renderCells = useMemo(function () {
        if (utils_1.isThereData(children)) {
            var length_1 = children.length;
            return children.map(function (cellItem, idx) {
                return cellRenderer(cellItem, idx, length_1);
            });
        }
        return null;
    }, [children, cellRenderer]);
    return (react_1.default.createElement(renderer_1.View, { style: [
            styles_1.default.fullWidth,
            styles_1.default.rowStyle,
            expensiveStyle,
            addtionalStyle
        ] }, renderCells));
};
exports.default = memo(TableRow);
//# sourceMappingURL=Row.js.map