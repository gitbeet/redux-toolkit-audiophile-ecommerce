import "../css/InTheBox.css";
import { IncludesInterface } from "../features/products/productsSlice";
interface Props {
  item: IncludesInterface;
}

export default function InTheBox({ item }: Props) {
  return (
    <p>
      <span className="color-accent">{`${item.quantity}x`}</span>
      <span className="color-gray in-the-box">{item.item}</span>
    </p>
  );
}
