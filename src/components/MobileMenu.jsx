import React from "react";
import * as ReactDOM from "react-dom";
import CategoryList from "./CategoryList";
import "../css/MobileMenu.css";
import Backdrop from "./Backdrop";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileMenu } from "../features/modals/modalsSlice";

export default function MobileMenu() {
  const dispatch = useDispatch();
  const { showMobileMenu } = useSelector((state) => state.modals);
  return ReactDOM.createPortal(
    <>
      <div
        className={`${
          showMobileMenu
            ? "mobile-menu show-animation"
            : "mobile-menu hide-animation"
        }`}
      >
        <CategoryList mobileMenu={true} />
      </div>
      {showMobileMenu && (
        <Backdrop clickFunction={() => dispatch(toggleMobileMenu())} />
      )}
    </>,
    document.getElementById("mobile-menu")
  );
}
