import "../css/QuantityButtons.css";
export default function QuantityButtons({
  buttonLeft,
  buttonRight,
  quantity,
  disabled = false,
}) {
  return (
    <div
      style={{ pointerEvents: disabled ? "none" : "auto" }}
      className="quantity-buttons"
    >
      <p onClick={buttonLeft} className="quantity-button">
        -
      </p>
      <p className="quantity-number">{quantity}</p>
      <p onClick={buttonRight} className="quantity-button">
        +
      </p>
    </div>
  );
}
