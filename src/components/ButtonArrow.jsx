import React from "react";
import "../css/ButtonArrow.css";
import { usePopUp } from "../context/PopUpContext";

export const iconArrowRight = (
  <svg
    width="8"
    height="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.322 1l5 5-5 5"
      stroke="#D87D4A"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd"
    />
  </svg>
);

export default function ButtonArrow({ text, mobileMenu }) {
  const { toggleMobileMenu } = usePopUp();

  return (
    <button
      onClick={mobileMenu ? () => toggleMobileMenu() : () => {}}
      className="button-arrow"
    >
      <p className="subtitle">{text}</p>
      {iconArrowRight}
    </button>
  );
}
