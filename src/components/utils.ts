import ReactPDF from "@react-pdf/renderer";
import { ChildItem } from "./interfaces/row.interface";
import Column from "./interfaces/columns.interface";
import { BodyDataItem, ResultOBj } from "./interfaces/utils.interface";
import { Style } from "./interfaces/styles.interface";

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

export const excuteFnOrReturnMe = (
  fn: Function | string | undefined,
  data: object,
  idx: number
) => {
  return typeof fn === "function" ? fn(data, idx) : fn;
};

export const renderRowKey = (
  rowItemData: Record<string, any>,
  idx: number,
  rowKey: string | Function | undefined
): string => {
  if (!rowKey) {
    console.warn(
      "Each record in dataSource of table should have a unique `key` prop, " +
        "or set `rowKey` of Table to an unique primary key"
    );
    return "";
  } else {
    const key: string = excuteFnOrReturnMe(rowKey, rowItemData, idx);
    return rowItemData[key];
  }
};

export const renderRowStyle = (
  rowItemData: Record<string, any>,
  idx: number,
  rowStyle: Function | Style | undefined
): undefined | Style => {
  if (typeof rowStyle === "function") {
    return excuteFnOrReturnMe(rowStyle, rowItemData, idx);
  } else {
    return rowStyle;
  }
};

export const normalizeChildren = (row: object, idx: number) => (
  itemValueRenderer: BodyDataItem
) => {
  const { key, valueDataIndex } = itemValueRenderer;
  const idxKey = idx.toString();
  if (typeof valueDataIndex === "function") {
    return {
      key: key || idxKey,
      title: valueDataIndex(row, idx)
    };
  } else if (
    typeof valueDataIndex === "object" &&
    Array.isArray(itemValueRenderer)
  ) {
    return valueDataIndex.map(({ dataIndex, key }) => ({
      title: (row as any)[dataIndex],
      key: key || idxKey
    }));
  } else {
    let res = {
      key: key || idxKey,
      title: ""
    };
    if (valueDataIndex && typeof valueDataIndex === "string") {
      res.title = (row as any)[valueDataIndex];
    }
    return res;
  }
};

export const renderStyleProps = (style = {}): Style =>
  ReactPDF.StyleSheet.create(style || {});
