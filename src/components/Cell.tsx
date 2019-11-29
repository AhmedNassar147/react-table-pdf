import React from "react";
import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";
import Props from "./interfaces/cell.interface";

const TableCell: React.FC<Props> = ({
  noBorder,
  children,
  style
}): JSX.Element => (
  <View
    wrap
    style={[styles.cellStyle, !noBorder && styles.cellOtherStyles, style]}
  >
    <Text>{children}</Text>
  </View>
);

export default React.memo(TableCell);
