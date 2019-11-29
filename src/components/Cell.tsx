import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import styles from "./styles";
import { renderStyleProps } from "./utils";
import Props from "./interfaces/cell.interface";

const { useMemo } = React;

const TableCell: React.FC<Props> = ({
  noBorder,
  children,
  style
}): JSX.Element => {
  const expensiveStyle = useMemo(() => {
    const { cellOtherStyles } = styles;
    return !noBorder ? cellOtherStyles : StyleSheet.create({});
  }, [noBorder]);

  const addtionalStyle = useMemo(() => renderStyleProps(style), [style]);

  return (
    <View wrap style={[styles.cellStyle, expensiveStyle, addtionalStyle]}>
      <Text>{children}</Text>
    </View>
  );
};

export default React.memo(TableCell);
