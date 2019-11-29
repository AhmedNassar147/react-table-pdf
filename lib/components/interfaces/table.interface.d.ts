import { Style } from "./styles.interface";
import Column from "./columns.interface";
export default interface Props {
    dataSource?: object[];
    rowKey?: string | ((record: object, index: number) => string);
    columns: Column[];
    style?: Style;
    headerRowStyle?: Style;
    rowStyle?: Style | ((record: object, index: number) => Style);
}
//# sourceMappingURL=table.interface.d.ts.map