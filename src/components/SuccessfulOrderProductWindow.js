import React, { useEffect } from "react";
import CheckoutProductWindow from "./CheckoutProductWindow";
import { formatCurrency } from "../utilities/formatCurrency";
import { useSelector } from "react-redux";
import "../css/SuccessfulOrderProductWindow.css";

export default function SuccessfulOrderProductWindow() {
  const { shoppingCart } = useSelector((state) => state.shoppingCart);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { productData } = useSelector((state) => state.products);
  const otherItems = shoppingCart.length - 1;
  let totalPrice = shoppingCart.reduce(
    (acc, product) =>
      acc +
      product.quantity *
        productData.find((prod) => prod.id.toString() === product.id).price,
    0
  );
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
          <CheckoutProductWindow product={shoppingCart[0]} form={true} />
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
