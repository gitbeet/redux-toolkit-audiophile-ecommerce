import "../css/ButtonArrow.css";
import { useAppDispatch } from "../hooks/reduxHooks";
import { toggleMobileMenu } from "../features/modals/modalsSlice";
export const iconArrowRight = (
  <svg
    width="8"
    height="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.322 1l5 5-5 5"
      stroke="#D87D4A"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

interface Props {
  text: string;
  mobileMenu: boolean;
}

export default function ButtonArrow({ text, mobileMenu }: Props) {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={mobileMenu ? () => dispatch(toggleMobileMenu()) : () => {}}
      className="button-arrow"
    >
      <p className="subtitle">{text}</p>
      {iconArrowRight}
    </button>
  );
}
