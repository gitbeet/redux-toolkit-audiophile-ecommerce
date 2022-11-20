import React, { useState, useEffect } from "react";
import "../css/AddToCart.css";
import QuantityButtons from "./QuantityButtons";
import {
  addToCart,
  addToCartLocalStorage,
} from "../features/shoppingCart/shoppingCartSlice";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";
export default function AddToCart({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(0);
  }, [product]);

  const handleAddToCart = () => {
    const productData = { id: product.id.toString(), quantity };
    if (!auth.currentUser) {
      dispatch(addToCartLocalStorage(productData));
      return;
    }
    dispatch(addToCart(productData));
  };

  return (
    <div className="add-to-cart">
      <QuantityButtons
        buttonLeft={() => setQuantity((prev) => (prev < 1 ? 0 : prev - 1))}
        buttonRight={() => setQuantity((prev) => prev + 1)}
        quantity={quantity}
      />
      <button onClick={handleAddToCart} className="btn-accent">
        add to cart
      </button>
    </div>
  );
}
