import React from "react";
export declare type childItem = {
    dataIndex: string;
    key?: React.Key;
};
export declare type renderItemType = (row: object, index: number) => React.ReactNode;
export default interface Column {
    title: React.ReactNode;
    key?: React.Key;
    dataIndex?: string;
    render?: renderItemType;
    children?: childItem[];
}
//# sourceMappingURL=columns.interface.d.ts.map