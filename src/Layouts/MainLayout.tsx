import { Outlet, useLocation } from "react-router-dom";
import CheckoutWindow from "../components/CheckoutWindow";
import CompanySummary from "../components/CompanySummary";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import Nav from "../components/Nav";
import SuccessfulOrderWindow from "../components/SuccessfulOrderWindow";
import { useAppSelector } from "../hooks/reduxHooks";

export default function MainLayout() {
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
