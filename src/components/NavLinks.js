import React from "react";
import { Link } from "react-router-dom";
import "../css/NavLinks.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/userSlice";
export default function NavLinks() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <h6 className="subtitle nav-links-element">
        <Link to="/">home</Link>
      </h6>
      <h6 className="subtitle nav-links-element">
        <Link to="/headphones">headphones</Link>
      </h6>
      <h6 className="subtitle nav-links-element">
        <Link to="/speakers">speakers</Link>
      </h6>
      <h6 className="subtitle nav-links-element">
        <Link to="/earphones">earphones</Link>
      </h6>
      {!user && (
        <>
          <h6 className="subtitle nav-links-element">
            <Link to="/login">Login</Link>
          </h6>
          <h6 className="subtitle nav-links-element">
            <Link to="/register">Register</Link>
          </h6>
        </>
      )}
      {user && (
        <h6
          onClick={() => dispatch(logout())}
          className="subtitle nav-links-element"
        >
          Logout
        </h6>
      )}
    </>
  );
}
