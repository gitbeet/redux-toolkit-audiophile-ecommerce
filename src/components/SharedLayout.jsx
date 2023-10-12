import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import CheckoutWindow from "./CheckoutWindow";
import CompanySummary from "./CompanySummary";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import SuccessfulOrderWindow from "./SuccessfulOrderWindow";
import { useSelector } from "react-redux";

export default function SharedLayout() {
  const { showCheckoutWindow, showSuccessfulOrderWindow } = useSelector(
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
