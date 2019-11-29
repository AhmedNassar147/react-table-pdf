import React from "react";

export type childItem = { dataIndex: string; key?: React.Key };
export type renderItemType = (row: object, index: number) => React.ReactNode;

export default interface Column {
  title: React.ReactNode;
  key?: React.Key;
  dataIndex?: string;
  render?: renderItemType;
  children?: childItem[];
}
