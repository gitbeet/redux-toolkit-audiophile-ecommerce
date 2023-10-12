import React, { useState, useEffect } from "react";
import "../css/AddToCart.css";
import QuantityButtons from "./QuantityButtons";
import {
  addToCart,
  addToCartLocalStorage,
} from "../features/shoppingCart/shoppingCartSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import { auth } from "../config/firebase";

interface Props {
  productId: number;
}

export default function AddToCart({ productId }: Props) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(0);
  }, [productId]);

  const handleAddToCart = () => {
    const productData = { id: productId, quantity };
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
      <button
        onClick={handleAddToCart}
        className="btn-accent"
      >
        add to cart
      </button>
    </div>
  );
}
