import { useAppSelector } from "../hooks/reduxHooks";
import "../css/MobileMenuButton.css";

interface Props {
  onClick: () => void;
}

export default function MobileMenuButton({ onClick }: Props) {
  const { showMobileMenu } = useAppSelector((state) => state.modals);

  return (
    <div
      onClick={onClick}
      className="mobile-menu-button"
    >
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
