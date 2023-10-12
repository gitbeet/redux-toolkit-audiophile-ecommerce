import "../css/Backdrop.css";
// interface Props {
//   clickFunction?: () => void;
//   zIndexValue: number;
// }

export default function Backdrop({ clickFunction, zIndexValue = 19 }) {
  return (
    <div
      onClick={clickFunction}
      style={{ zIndex: zIndexValue }}
      className="backdrop"
    ></div>
  );
}
