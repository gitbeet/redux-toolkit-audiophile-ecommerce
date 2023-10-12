import * as ReactDOM from "react-dom";
import CategoryList from "./CategoryList";
import "../css/MobileMenu.css";
import Backdrop from "./Backdrop";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { toggleMobileMenu } from "../features/modals/modalsSlice";

export default function MobileMenu() {
  const dispatch = useAppDispatch();
  const { showMobileMenu } = useAppSelector((state) => state.modals);
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
    document.getElementById("mobile-menu") as Element
  );
}
