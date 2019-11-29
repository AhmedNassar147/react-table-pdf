import React from "react";
import { ChildItem } from "./interfaces/row.interface";
import Column, {
  childItem as bodyItemType,
  renderItemType
} from "./interfaces/columns.interface";

export interface BodyDataItem {
  valueDataIndex?: string | renderItemType | bodyItemType[];
  key?: React.Key;
}

interface ResultOBj {
  headerData: ChildItem[];
  bodyData: BodyDataItem[];
}

export const isThereData = <T>(data: T[]): boolean => {
  return data && Array.isArray(data) && !!data.length;
};

export const normalizer = (cols: Column[]): ResultOBj => {
  let headerData: ChildItem[] = [];
  let bodyData: BodyDataItem[] = [];

  if (isThereData(cols)) {
    cols.map((item: Column) => {
      headerData = [
        ...headerData,
        {
          title: item.title,
          key: item.key
        }
      ];

      bodyData = [
        ...bodyData,
        {
          valueDataIndex: item.dataIndex || item.render || item.children,
          key: item.key
        }
      ];
    });
  }

  return {
    headerData,
    bodyData
  };
};
