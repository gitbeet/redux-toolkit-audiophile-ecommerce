import { formatCurrency } from "../utilities/formatCurrency";
import { useAppSelector } from "../hooks/reduxHooks";
import "../css/CheckoutPricing.css";

export default function CheckoutPricing() {
  const { productData } = useAppSelector((state) => state.products);
  const { shoppingCart } = useAppSelector((state) => state.shoppingCart);
  let totalPrice = shoppingCart.reduce((acc, product) => {
    const price =
      productData.find((prod) => prod.id === product.id)?.price || 0;
    return acc + product.quantity * price;
  }, 0);

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
