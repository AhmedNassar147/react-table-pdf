"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var renderer_1 = __importDefault(require("@react-pdf/renderer"));
exports.isThereData = function (data) {
    return data && Array.isArray(data) && !!data.length;
};
exports.normalizer = function (cols) {
    var headerData = [];
    var bodyData = [];
    if (exports.isThereData(cols)) {
        cols.map(function (item) {
            headerData = __spreadArrays(headerData, [
                {
                    title: item.title,
                    key: item.key
                }
            ]);
            bodyData = __spreadArrays(bodyData, [
                {
                    valueDataIndex: item.dataIndex || item.render || item.children,
                    key: item.key
                }
            ]);
        });
    }
    return {
        headerData: headerData,
        bodyData: bodyData
    };
};
exports.excuteFnOrReturnMe = function (fn, data, idx) {
    return typeof fn === "function" ? fn(data, idx) : fn;
};
exports.renderRowKey = function (rowItemData, idx, rowKey) {
    if (!rowKey) {
        console.warn("Each record in dataSource of table should have a unique `key` prop, " +
            "or set `rowKey` of Table to an unique primary key");
        return "";
    }
    else {
        var key = exports.excuteFnOrReturnMe(rowKey, rowItemData, idx);
        return rowItemData[key];
    }
};
exports.renderRowStyle = function (rowItemData, idx, rowStyle) {
    if (typeof rowStyle === "function") {
        return exports.excuteFnOrReturnMe(rowStyle, rowItemData, idx);
    }
    else {
        return rowStyle;
    }
};
exports.normalizeChildren = function (row, idx) { return function (itemValueRenderer) {
    var key = itemValueRenderer.key, valueDataIndex = itemValueRenderer.valueDataIndex;
    var idxKey = idx.toString();
    if (typeof valueDataIndex === "function") {
        return {
            key: key || idxKey,
            title: valueDataIndex(row, idx)
        };
    }
    else if (typeof valueDataIndex === "object" &&
        Array.isArray(itemValueRenderer)) {
        return valueDataIndex.map(function (_a) {
            var dataIndex = _a.dataIndex, key = _a.key;
            return ({
                title: row[dataIndex],
                key: key || idxKey
            });
        });
    }
    else {
        var res = {
            key: key || idxKey,
            title: ""
        };
        if (valueDataIndex && typeof valueDataIndex === "string") {
            res.title = row[valueDataIndex];
        }
        return res;
    }
}; };
exports.renderStyleProps = function (style) {
    if (style === void 0) { style = {}; }
    return renderer_1.default.StyleSheet.create(style || {});
};
//# sourceMappingURL=utils.js.map