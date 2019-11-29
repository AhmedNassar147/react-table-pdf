"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var renderer_1 = __importDefault(require("@react-pdf/renderer"));
var StyleSheet = renderer_1.default.StyleSheet;
exports.default = StyleSheet.create({
    fullWidth: {
        width: "100%"
    },
    rowStyle: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        minHeight: 30,
        borderTopColor: "#b0e4ff",
        borderBottomColor: "#b0e4ff",
        borderTopWidth: 1,
        borderBottomWidth: 1
        // justifyContent: "stretch"
    },
    headerRowStyle: {
        backgroundColor: "#6f42c1",
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    },
    simpleRowStyle: {
        backgroundColor: "#fff",
        fontSize: 14,
        fontWeight: "medium",
        color: "#000"
    },
    cellStyle: {
        height: "100%",
        flex: 1,
        justifyContent: "center",
        textAlign: "center"
        // wordWrap: "break-word",
        // whiteSpace: "pre-wrap"
    },
    cellOtherStyles: {
        borderRight: 1,
        borderRightColor: "#b0e4ff"
    },
    cellsWrapper: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        height: "100%"
    }
});
//# sourceMappingURL=styles.js.map