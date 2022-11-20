import { useState } from "react";
import * as ReactDOM from "react-dom";
import { useProductData } from "../context/ProductDataContext";
import { usePopUp } from "../context/PopUpContext";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeAll } from "../features/shoppingCart/shoppingCartSlice";
import { formatCurrency } from "../utilities/formatCurrency";
import CheckoutProductList from "./CheckoutProductList";
import Backdrop from "./Backdrop";
import TextButton from "./TextButton";
import "../css/CheckoutWindow.css";

export default function CheckoutWindow() {
  const dispatch = useDispatch();
  const { shoppingCart, isLoading } = useSelector(
    (state) => state.shoppingCart
  );
  const navigate = useNavigate();
  const { productData } = useProductData();
  const { hideCheckoutWindow } = usePopUp();
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);
  let totalPrice = shoppingCart.reduce(
    (acc, product) =>
      acc +
      product.quantity *
        productData.find((prod) => prod.id.toString() === product.id).price,
    0
  );

  function checkout() {
    setError("");
    if (
      shoppingCart.length === 0 ||
      shoppingCart.reduce((acc, product) => acc + product.quantity, 0) === 0
    ) {
      setError("You have no products in the cart.");
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);
      return;
    }
    hideCheckoutWindow();
    navigate("/checkout");
  }
  const totalProductNumber = shoppingCart.reduce(
    (acc, prod) => acc + prod.quantity,
    0
  );

  return ReactDOM.createPortal(
    <>
      <Backdrop clickFunction={hideCheckoutWindow} />
      <div className="checkout-window">
        <section>
          <h6 className="checkout-cart">cart ({totalProductNumber})</h6>
          <div className="remove-all">
            <TextButton
              disabled={isLoading}
              clickFunction={() => dispatch(removeAll())}
              underline={true}
              text="Remove all"
            />
          </div>
        </section>
        <CheckoutProductList />
        <section>
          <h6 className="color-gray subtitle checkout-total">total</h6>
          <h6>{formatCurrency(totalPrice)}</h6>
        </section>
        <p
          className={`${
            visible
              ? "checkout-window-error-message error-text"
              : "message-fade-out error-text"
          }`}
        >
          {error}
        </p>
        <button onClick={checkout} className="btn-accent">
          checkout
        </button>
      </div>
    </>,
    document.getElementById("checkout-window")
  );
}
