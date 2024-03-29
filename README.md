## customizable pdfTable build on react, ts and @react-pdf/renderer

**Note: This Library based on @react-pdf/renderer**

## How to install

```sh
yarn add react-table-pdf
npm i react-table-pdf
```

## 🔨 Usage

```jsx
import { Table, TableRow, TableCell } from "react-table-pdf";
```

## also we provide utils so if you want to build your own Table

```jsx
import {
  excuteFnOrReturnMe,
  isThereData,
  normalizer,
  renderRowStyle,
  renderRowKey
} from "react-table-pdf";
```

## Table Props

| Name           |                                                                            Type                                                                            | Required |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :------: |
| columns        |                                                                           Array                                                                            |   true   |
| dataSource     |                                                                           Array                                                                            |   true   |
| rowKey         |                                                             `string | (row, index) => string`                                                              |   true   |
| style          |              <a href="https://github.com/AhmedNassar147/react-table-pdf/blob/master/src/components/interfaces/styles.interface.ts">Style </a>              |  false   |
| headerRowStyle |              <a href="https://github.com/AhmedNassar147/react-table-pdf/blob/master/src/components/interfaces/styles.interface.ts">Style </a>              |  false   |
| rowStyle       | <a href="https://github.com/AhmedNassar147/react-table-pdf/blob/master/src/components/interfaces/styles.interface.ts"> Style or (row, index) => Style </a> |  false   |

## TableRow Props

| Name     |                                                               Type                                                               | Required |
| :------- | :------------------------------------------------------------------------------------------------------------------------------: | :------: |
| children |                                                              Array                                                               |   true   |
| isHeader |                                                             boolean                                                              |  false   |
| style    | <a href="https://github.com/AhmedNassar147/react-table-pdf/blob/master/src/components/interfaces/styles.interface.ts">Style </a> |  false   |

## TableCell Props

| Name     |                                                               Type                                                               | Required |
| :------- | :------------------------------------------------------------------------------------------------------------------------------: | :------: |
| children |                                                               text                                                               |   true   |
| noBorder |                                                             boolean                                                              |  false   |
| style    | <a href="https://github.com/AhmedNassar147/react-table-pdf/blob/master/src/components/interfaces/styles.interface.ts">Style </a> |  false   |
