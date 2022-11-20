import { useProductData } from "../context/ProductDataContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { useSelector } from "react-redux";
import "../css/CheckoutPricing.css";

export default function CheckoutPricing() {
  const { productData } = useProductData();
  const { shoppingCart } = useSelector((state) => state.shoppingCart);
  let totalPrice = shoppingCart.reduce(
    (acc, product) =>
      acc +
      product.quantity *
        productData.find((prod) => prod.id.toString() === product.id).price,
    0
  );

  return (
    <div className="checkout-pricing">
      <section>
        <h6 className="color-gray subtitle checkout-total">total</h6>
        <h6>{formatCurrency(totalPrice)}</h6>
      </section>
      <section>
        <h6 className="color-gray subtitle checkout-total">shipping</h6>
        <h6>{formatCurrency(50)}</h6>
      </section>
      <section>
        <h6 className="color-gray subtitle checkout-total">vat(included)</h6>
        <h6>{formatCurrency(totalPrice * 0.2)}</h6>
      </section>
      <section>
        <h6 className="color-gray subtitle checkout-total">grand total</h6>
        <h6 className="color-accent">
          {formatCurrency(totalPrice + 50 + totalPrice * 0.2)}
        </h6>
      </section>
    </div>
  );
}
