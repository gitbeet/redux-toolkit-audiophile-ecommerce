import QuantityButtons from "./QuantityButtons";
import { formatCurrency } from "../utilities/formatCurrency";
import {
  ShoppingCartItemInterface,
  addToCart,
  changeQuantityLocalStorage,
} from "../features/shoppingCart/shoppingCartSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import "../css/CheckoutProductWindow.css";
interface Props {
  product: ShoppingCartItemInterface;
  form: boolean;
}

export default function CheckoutProductWindow({
  product,
  form = false,
}: Props) {
  const { user } = useAppSelector((state) => state.user);
  const { isLoading } = useAppSelector((state) => state.shoppingCart);
  const { productData } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  console.log("PRODUCT ID: ", product.id);
  if (!productData) return <p>loading product</p>;
  const fullProductData = productData.find((prod) => {
    console.log(prod.id);
    return prod.id === product.id;
  });

  const handleChangeQuantity = (operator: "add" | "remove") => {
    if (!user) {
      dispatch(
        changeQuantityLocalStorage({
          id: product.id,
          quantity:
            operator === "add" ? product.quantity + 1 : product.quantity - 1,
        })
      );
      return;
    }
    dispatch(
      addToCart({
        id: product.id,
        quantity:
          operator === "add" ? product.quantity + 1 : product.quantity - 1,
      })
    );
  };

  return (
    <div
      className={`${
        form ? "checkout-product-window-form" : "checkout-product-window"
      }`}
    >
      <div className="checkout-product-window-left">
        <div className="checkout-product-image">
          <img
            className="image-border"
            src={fullProductData?.cartImage}
            alt="product"
          />
        </div>
        <div
          className={`${
            form ? "checkout-product-text-form" : "checkout-product-text"
          }`}
        >
          <h6 className="checkout-product-name">
            {fullProductData?.slug
              .split("-")
              .splice(0, fullProductData.slug.split("-").length - 1)
              .join(" ")}
          </h6>
          <p className="color-gray checkout-product-price">
            {formatCurrency(fullProductData?.price || 0)}
          </p>
        </div>
      </div>
      <div className="checkout-window-quantity-buttons">
        {form && (
          <h6 className="color-gray quantity-form">x{product.quantity}</h6>
        )}
        {!form && (
          <QuantityButtons
            disabled={isLoading}
            buttonLeft={() => {
              if (product.quantity < 1) return;
              handleChangeQuantity("remove");
            }}
            buttonRight={() => handleChangeQuantity("add")}
            quantity={product.quantity}
          />
        )}
      </div>
    </div>
  );
}
