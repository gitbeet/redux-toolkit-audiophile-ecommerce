import "../css/TextButton.css";

export default function TextButton({
  clickFunction,
  underline = false,
  text = "Go Back",
  disabled = false,
}) {
  return (
    <p
      style={{
        textDecoration: underline ? "underline" : "none",
        pointerEvents: disabled ? "none" : "auto",
      }}
      onClick={clickFunction}
      className="color-gray cursor-pointer go-back-button"
    >
      {text}
    </p>
  );
}
