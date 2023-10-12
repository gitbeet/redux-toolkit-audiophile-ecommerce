import "../css/TextButton.css";

interface Props {
  clickFunction: () => void;
  underline?: boolean;
  text?: string;
  disabled?: boolean;
}

export default function TextButton({
  clickFunction,
  underline = false,
  text = "Go Back",
  disabled = false,
}: Props) {
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
