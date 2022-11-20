import React, { useState, useEffect } from "react";
import "../css/AddToCart.css";
import QuantityButtons from "./QuantityButtons";
import { addToCart } from "../features/shoppingCart/shoppingCartSlice";
import { useDispatch } from "react-redux";
export default function AddToCart({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(0);
  }, [product]);
  return (
    <div className="add-to-cart">
      <QuantityButtons
        buttonLeft={() => setQuantity((prev) => (prev < 1 ? 0 : prev - 1))}
        buttonRight={() => setQuantity((prev) => prev + 1)}
        quantity={quantity}
      />
      <button
        onClick={() => {
          const productData = { id: product.id, quantity };
          dispatch(addToCart(productData));
        }}
        className="btn-accent"
      >
        add to cart
      </button>
    </div>
  );
}
