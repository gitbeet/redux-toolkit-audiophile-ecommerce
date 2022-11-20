import { usePopUp } from "../context/PopUpContext";
import "../css/MobileMenuButton.css";

export default function MobileMenuButton({ onClick }) {
  const { showMobileMenu } = usePopUp();

  return (
    <div onClick={onClick} className="mobile-menu-button">
      <div
        className={
          showMobileMenu ? "mobile-menu-top-line-open" : "mobile-menu-top-line"
        }
      ></div>
      <div
        className={
          showMobileMenu
            ? "mobile-menu-middle-line-open"
            : "mobile-menu-middle-line"
        }
      ></div>
      <div
        className={
          showMobileMenu
            ? "mobile-menu-bottom-line-open"
            : "mobile-menu-bottom-line"
        }
      ></div>
    </div>
  );
}
