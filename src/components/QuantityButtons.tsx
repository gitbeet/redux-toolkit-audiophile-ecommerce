import "../css/QuantityButtons.css";

interface Props {
  buttonLeft: () => void;
  buttonRight: () => void;
  quantity: number;
  disabled?: boolean;
}

export default function QuantityButtons({
  buttonLeft,
  buttonRight,
  quantity,
  disabled = false,
}: Props) {
  return (
    <div
      style={{ pointerEvents: disabled ? "none" : "auto" }}
      className="quantity-buttons"
    >
      <p
        onClick={buttonLeft}
        className="quantity-button"
      >
        -
      </p>
      <p className="quantity-number">{quantity}</p>
      <p
        onClick={buttonRight}
        className="quantity-button"
      >
        +
      </p>
    </div>
  );
}
