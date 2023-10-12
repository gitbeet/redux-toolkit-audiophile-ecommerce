import InTheBox from "./InTheBox";
import "../css/InTheBoxList.css";
import { IncludesInterface } from "../features/products/productsSlice";

interface Props {
  includes: IncludesInterface[];
}

export default function InTheBoxList({ includes }: Props) {
  return (
    <div className="in-the-box-list">
      {includes.map((item, index) => (
        <InTheBox
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}
