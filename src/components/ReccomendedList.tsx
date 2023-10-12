import ReccomendedProduct from "./ReccomendedProduct";
import "../css/ReccomendedList.css";
import { OtherInterface } from "../features/products/productsSlice";

interface Props {
  reccomendedProducts: OtherInterface[];
  category: string;
}

export default function ReccomendedList({
  reccomendedProducts,
  category,
}: Props) {
  return (
    <div className="reccomended-list text-center">
      <h3>you may also like</h3>
      <div className="reccomended-list-container">
        {reccomendedProducts.map((reccomendedProduct, index) => {
          return (
            <ReccomendedProduct
              key={index}
              reccomendedProduct={reccomendedProduct}
              category={category}
            />
          );
        })}
      </div>
    </div>
  );
}
