import CheckoutProductWindow from "./CheckoutProductWindow";
import { useSelector } from "react-redux";
import "../css/CheckoutProductList.css";

export default function CheckoutProductList({ form = false }) {
  const { shoppingCart } = useSelector((state) => state.shoppingCart);

  return (
    <div className="checkout-product-list">
      {shoppingCart.map((product) => {
        return (
          <CheckoutProductWindow
            form={form}
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
}
