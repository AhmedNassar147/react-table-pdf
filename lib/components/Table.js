"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var styles_1 = __importDefault(require("./styles"));
var Row_1 = __importDefault(require("./Row"));
var utils_1 = require("./utils");
var useMemo = react_1.default.useMemo, useCallback = react_1.default.useCallback;
var Table = function (_a) {
    var columns = _a.columns, dataSource = _a.dataSource, rowKey = _a.rowKey, style = _a.style, headerRowStyle = _a.headerRowStyle, rowStyle = _a.rowStyle;
    var memorizedNormalizer = useCallback(utils_1.normalizer, []);
    var _b = useMemo(function () { return memorizedNormalizer(columns); }, [
        columns,
        memorizedNormalizer
    ]), bodyData = _b.bodyData, headerData = _b.headerData;
    var getRowKey = useCallback(function (rowItem, idx) { return utils_1.renderRowKey(rowItem, idx, rowKey); }, [rowKey, utils_1.renderRowKey]);
    var getRowStyle = useCallback(function (rowItemData, idx) { return utils_1.renderRowStyle(rowItemData, idx, rowStyle); }, [rowStyle, utils_1.renderRowStyle]);
    var renderChildren = useCallback(utils_1.normalizeChildren, []);
    var renderBody = useMemo(function () {
        return (dataSource &&
            dataSource.map(function (rowItemData, idx) {
                var key = getRowKey(rowItemData, idx);
                var style = getRowStyle(rowItemData, idx);
                return (react_1.default.createElement(Row_1.default, { key: key, style: style }, bodyData.map(renderChildren(rowItemData, idx))));
            }));
    }, [bodyData, dataSource, getRowKey, rowStyle, getRowStyle, renderChildren]);
    var addtionalStyle = useMemo(function () { return utils_1.renderStyleProps(style); }, [style]);
    return (react_1.default.createElement(renderer_1.View, { style: [styles_1.default.fullWidth, addtionalStyle] },
        react_1.default.createElement(Row_1.default, { isHeader: true, style: headerRowStyle }, headerData),
        renderBody));
};
Table.defaultProps = {
    dataSource: [],
    columns: []
};
exports.default = react_1.default.memo(Table);
//# sourceMappingURL=Table.js.map