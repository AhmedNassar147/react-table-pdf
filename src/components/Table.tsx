import React from "react";
import { View } from "@react-pdf/renderer";
import styles from "./styles";
import TableRow from "./Row";
import {
  normalizer,
  renderRowKey,
  renderRowStyle,
  normalizeChildren,
  renderStyleProps
} from "./utils";
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

  const getRowKey = useCallback(
    (rowItem, idx) => renderRowKey(rowItem, idx, rowKey),
    [rowKey, renderRowKey]
  );

  const getRowStyle = useCallback(
    (rowItemData, idx) => renderRowStyle(rowItemData, idx, rowStyle),
    [rowStyle, renderRowStyle]
  );

  const renderChildren = useCallback(normalizeChildren, []);

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

  const addtionalStyle = useMemo(() => renderStyleProps(style), [style]);

  return (
    <View style={[styles.fullWidth, addtionalStyle]}>
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
