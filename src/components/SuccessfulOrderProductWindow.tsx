import React from "react";
import CheckoutProductWindow from "./CheckoutProductWindow";
import { formatCurrency } from "../utilities/formatCurrency";
import { useAppSelector } from "../hooks/reduxHooks";
import "../css/SuccessfulOrderProductWindow.css";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function SuccessfulOrderProductWindow() {
  const { shoppingCart } = useAppSelector((state) => state.shoppingCart);

  useScrollToTop();

  const { productData } = useAppSelector((state) => state.products);
  if (!productData) return <p>Loading product data...</p>;
  const otherItems = shoppingCart.length - 1;
  let totalPrice = shoppingCart.reduce((acc, product) => {
    const prod = productData.find((prod) => prod.id === product.id);
    const price = prod?.price || 0;
    return acc + product.quantity * price;
  }, 0);
  return (
    <div className="successful-order-product-window">
      <div className="successful-order-top">
        <div
          className={`${
            otherItems > 0
              ? "successful-order-product-first border-bottom"
              : "successful-order-product-first "
          }`}
        >
          <CheckoutProductWindow
            product={shoppingCart[0]}
            form={true}
          />
        </div>
        {otherItems > 0 && (
          <p className="color-gray text-center">
            and {otherItems} other item{otherItems > 1 ? "s" : ""}
          </p>
        )}
      </div>
      <div className="successful-order-bottom">
        <h6 className="successful-order-grand-total">grand total</h6>
        <h6 className="successful-order-price">
          {formatCurrency(totalPrice + 50 + totalPrice * 0.2)}
        </h6>
      </div>
    </div>
  );
}
