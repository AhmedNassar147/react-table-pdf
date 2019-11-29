import React from "react";
import { View } from "@react-pdf/renderer";
import styles from "./styles";
import TableRow from "./Row";
import { normalizer, BodyDataItem } from "./utils";
import TableProps from "./interfaces/table.interface";
import { ChildItem } from "./interfaces/row.interface";

const { useMemo, useCallback } = React;

const Table: React.FC<TableProps> = ({
  columns,
  dataSource,
  rowKey,
  style,
  headerRowStyle,
  rowStyle
}): JSX.Element => {
  const memorizedNormalizer = useCallback(normalizer, []);

  const { bodyData, headerData } = useMemo(() => memorizedNormalizer(columns), [
    columns,
    memorizedNormalizer
  ]);

  const getResponse = useCallback(
    (fn: Function | string | undefined, data: object, idx: number) => {
      return typeof fn === "function" ? fn(data, idx) : fn;
    },
    []
  );

  const getRowKey = useCallback(
    (rowItemData: object, idx: number) => {
      if (!rowKey) {
        console.warn(
          "Each record in dataSource of table should have a unique `key` prop, " +
            "or set `rowKey` of Table to an unique primary key"
        );
        return "";
      } else {
        const key: string = getResponse(rowKey, rowItemData, idx);
        return (rowItemData as any)[key];
      }
    },
    [rowKey, getResponse]
  );

  const getRowStyle = useCallback(
    (rowItemData, idx) => {
      if (typeof rowStyle === "function") {
        return getResponse(rowStyle, rowItemData, idx);
      } else {
        return rowStyle;
      }
    },
    [rowStyle, getResponse]
  );

  const renderChildren = useCallback(
    (row: object, idx: number) => (itemValueRenderer: BodyDataItem) => {
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
    },
    []
  );

  const renderBody = useMemo(() => {
    return (
      dataSource &&
      dataSource.map((rowItemData: object, idx: number) => {
        const key = getRowKey(rowItemData, idx);
        const style = getRowStyle(rowItemData, idx);

        return (
          <TableRow key={key} style={style}>
            {bodyData.map(renderChildren(rowItemData, idx)) as ChildItem[]}
          </TableRow>
        );
      })
    );
  }, [bodyData, dataSource, getRowKey, rowStyle, getRowStyle, renderChildren]);

  return (
    <View style={[styles.fullWidth, style]}>
      <TableRow isHeader style={headerRowStyle}>
        {headerData}
      </TableRow>

      {renderBody}
    </View>
  );
};

Table.defaultProps = {
  dataSource: [],
  columns: []
};

export default React.memo(Table);
