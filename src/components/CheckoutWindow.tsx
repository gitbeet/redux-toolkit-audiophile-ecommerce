import { useState } from "react";
import * as ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { setShowCheckoutWindow } from "../features/modals/modalsSlice";
import {
  removeAll,
  removeAllLocalStorage,
} from "../features/shoppingCart/shoppingCartSlice";
import { formatCurrency } from "../utilities/formatCurrency";
import CheckoutProductList from "./CheckoutProductList";
import Backdrop from "./Backdrop";
import TextButton from "./TextButton";
import "../css/CheckoutWindow.css";

export default function CheckoutWindow() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { shoppingCart, isLoading } = useAppSelector(
    (state) => state.shoppingCart
  );
  const navigate = useNavigate();
  const { productData } = useAppSelector((state) => state.products);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  let totalPrice = shoppingCart.reduce((acc, product) => {
    // ???
    const price =
      productData.find((prod) => prod.id === product.id)?.price || 0;
    return acc + product.quantity * price;
  }, 0);

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
    dispatch(setShowCheckoutWindow(false));
    navigate("/checkout");
  }
  const totalProductNumber = shoppingCart.reduce(
    (acc, prod) => acc + prod.quantity,
    0
  );

  const handleRemoveAll = () => {
    if (!user) {
      dispatch(removeAllLocalStorage());
      return;
    }
    dispatch(removeAll());
  };

  return ReactDOM.createPortal(
    <>
      <Backdrop clickFunction={() => dispatch(setShowCheckoutWindow(false))} />
      <div className="checkout-window">
        <section>
          <h6 className="checkout-cart">cart ({totalProductNumber})</h6>
          <div className="remove-all">
            <TextButton
              disabled={isLoading}
              clickFunction={handleRemoveAll}
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
        <button
          onClick={checkout}
          className="btn-accent"
        >
          checkout
        </button>
      </div>
    </>,
    document.getElementById("checkout-window") as Element
  );
}
