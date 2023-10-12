import { Outlet, useLocation } from "react-router-dom";
import CheckoutWindow from "./CheckoutWindow";
import CompanySummary from "./CompanySummary";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import SuccessfulOrderWindow from "./SuccessfulOrderWindow";
import { useAppSelector } from "../hooks/reduxHooks";

export default function SharedLayout() {
  const { showCheckoutWindow, showSuccessfulOrderWindow } = useAppSelector(
    (state) => state.modals
  );
  const location = useLocation();

  return (
    <>
      <Nav homePage={location.pathname === "/" ? true : false} />
      <MobileMenu />
      {showCheckoutWindow && <CheckoutWindow />}
      {showSuccessfulOrderWindow && <SuccessfulOrderWindow />}
      <Outlet />
      {location.pathname !== "/checkout" && <CompanySummary />}
      <Footer />
    </>
  );
}
