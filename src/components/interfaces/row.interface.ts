import React from "react";
import { Style } from "./styles.interface";

export interface ChildItem {
  title: React.ReactNode;
  key?: React.Key;
}

export default interface Props {
  isHeader?: boolean;
  children: (ChildItem | ChildItem[])[];
  style?: Style;
}
