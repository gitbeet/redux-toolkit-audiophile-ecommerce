import CheckoutProductWindow from "./CheckoutProductWindow";
import { useAppSelector } from "../hooks/reduxHooks";
import "../css/CheckoutProductList.css";

export default function CheckoutProductList({ form = false }) {
  const { shoppingCart } = useAppSelector((state) => state.shoppingCart);

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
