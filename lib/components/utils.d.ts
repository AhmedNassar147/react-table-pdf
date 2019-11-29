/// <reference types="react" />
import Column from "./interfaces/columns.interface";
import { BodyDataItem, ResultOBj } from "./interfaces/utils.interface";
import { Style } from "./interfaces/styles.interface";
export declare const isThereData: <T>(data: T[]) => boolean;
export declare const normalizer: (cols: Column[]) => ResultOBj;
export declare const excuteFnOrReturnMe: (fn: string | Function | undefined, data: object, idx: number) => any;
export declare const renderRowKey: (rowItemData: Record<string, any>, idx: number, rowKey: string | Function | undefined) => string;
export declare const renderRowStyle: (rowItemData: Record<string, any>, idx: number, rowStyle: Function | Style | undefined) => Style | undefined;
export declare const normalizeChildren: (row: object, idx: number) => (itemValueRenderer: BodyDataItem) => {
    title: any;
    key: string | number;
}[] | {
    key: string | number;
    title: import("react").ReactNode;
};
export declare const renderStyleProps: (style?: {}) => Style;
//# sourceMappingURL=utils.d.ts.map