import React from "react";
import { childItem as bodyItemType, renderItemType } from "./columns.interface";
import { ChildItem } from "./row.interface";
export interface BodyDataItem {
    valueDataIndex?: string | renderItemType | bodyItemType[];
    key?: React.Key;
}
export interface ResultOBj {
    headerData: ChildItem[];
    bodyData: BodyDataItem[];
}
//# sourceMappingURL=utils.interface.d.ts.map