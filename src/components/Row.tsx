import React from "react";
import { View } from "@react-pdf/renderer";
import styles from "./styles";
import Cell from "./Cell";
import { isThereData, renderStyleProps } from "./utils";
import Props, { ChildItem } from "./interfaces/row.interface";

const { useMemo, memo, useCallback } = React;

const TableRow: React.FC<Props> = ({
  isHeader,
  children,
  style
}): JSX.Element => {
  const expensiveStyle = useMemo(() => {
    const { headerRowStyle, simpleRowStyle } = styles;
    return isHeader ? headerRowStyle : simpleRowStyle;
  }, [isHeader]);

  const cellRenderer = useCallback(
    (cellItem: ChildItem | ChildItem[], idx: number, length: number) => {
      if (typeof cellItem === "object" && Array.isArray(cellItem)) {
        return (
          <View style={styles.cellsWrapper} key={idx.toString()}>
            {cellItem.map((item: ChildItem | ChildItem[], childKey: number) =>
              cellRenderer(item, childKey, length)
            )}
          </View>
        );
      } else {
        const { title, key } = cellItem;
        return (
          <Cell
            noBorder={length - 1 === idx}
            key={key || idx.toString()}
            children={title}
          />
        );
      }
    },
    []
  );

  const addtionalStyle = useMemo(() => renderStyleProps(style), [style]);

  const renderCells = useMemo(() => {
    if (isThereData(children)) {
      const length = children.length;
      return children.map((cellItem: ChildItem | ChildItem[], idx: number) =>
        cellRenderer(cellItem, idx, length)
      );
    }
    return null;
  }, [children, cellRenderer]);

  return (
    <View
      style={[
        styles.fullWidth,
        styles.rowStyle,
        expensiveStyle,
        addtionalStyle
      ]}
    >
      {renderCells}
    </View>
  );
};

export default memo(TableRow);
