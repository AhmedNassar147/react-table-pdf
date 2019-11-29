import { Style } from "./styles.interface";

export default interface Props {
  noBorder?: boolean;
  children: React.ReactNode;
  style?: Style;
}
