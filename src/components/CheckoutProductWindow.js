import { useEffect, useState } from "react";
import QuantityButtons from "./QuantityButtons";
import { useProductData } from "../context/ProductDataContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { addToCart } from "../features/shoppingCart/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import "../css/CheckoutProductWindow.css";

export default function CheckoutProductWindow({ product, form = false }) {
  const { isLoading } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const [cartImage, setCartImage] = useState();
  const { productData } = useProductData();

  const fullProductData = productData.find((prod) => {
    return prod.id.toString() === product.id;
  });
  const { quantity, id } = product;
  const { slug, price } = fullProductData;
  console.log(product);
  useEffect(() => {
    import(`../assets/cart/image-${fullProductData.slug}.jpg`).then((image) =>
      setCartImage(image.default)
    );
  }, []);

  return (
    <div
      className={`${
        form ? "checkout-product-window-form" : "checkout-product-window"
      }`}
    >
      <div className="checkout-product-window-left">
        <div className="checkout-product-image">
          <img className="image-border" src={cartImage} alt="product" />
        </div>
        <div
          className={`${
            form ? "checkout-product-text-form" : "checkout-product-text"
          }`}
        >
          <h6 className="checkout-product-name">
            {slug
              .split("-")
              .splice(0, slug.split("-").length - 1)
              .join(" ")}
          </h6>
          <p className="color-gray checkout-product-price">
            {formatCurrency(price)}
          </p>
        </div>
      </div>
      <div className="checkout-window-quantity-buttons">
        {form && <h6 className="color-gray quantity-form">x{quantity}</h6>}
        {!form && (
          <QuantityButtons
            disabled={isLoading}
            buttonLeft={() => {
              if (quantity < 1) return;
              dispatch(addToCart({ id, quantity: quantity - 1 }));
            }}
            buttonRight={() =>
              dispatch(addToCart({ id, quantity: quantity + 1 }))
            }
            quantity={quantity}
          />
        )}
      </div>
    </div>
  );
}
