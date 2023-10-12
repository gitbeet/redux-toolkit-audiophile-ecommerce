import { Link } from "react-router-dom";
import "../css/NavLinks.css";
export default function NavLinks() {
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
    </>
  );
}
