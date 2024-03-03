import icon from "../assets/checkout/icon-order-confirmation.svg";
import SuccessfulOrderProductWindow from "../components/SuccessfulOrderProductWindow";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  removeAll,
  removeAllLocalStorage,
} from "../features/shoppingCart/shoppingCartSlice";
import { toggleShowSuccessfulOrderWindow } from "../features/modals/modalsSlice";
import "../css/SuccessfulOrder.css";

export default function SuccessfulOrder() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function successfulOrderGoHome() {
    dispatch(toggleShowSuccessfulOrderWindow());
    navigate("/");
    if (user == null) {
      dispatch(removeAllLocalStorage());
      return;
    }
    dispatch(removeAll());
  }

  return (
    <div className="successful-order">
      <img
        className="confirmation-icon"
        src={icon}
        alt="confirmation icon"
      />
      <h2>
        thank you
        <br />
        for your order
      </h2>
      <p className="color-gray">
        You will recieve an email confirmation shortly.
      </p>
      <SuccessfulOrderProductWindow />
      <button
        onClick={successfulOrderGoHome}
        className="btn-accent"
      >
        back to home
      </button>
    </div>
  );
}
