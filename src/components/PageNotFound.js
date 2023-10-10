import "../css/PageNotFound.css";

import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="container text-center not-found">
      <h1>Sorry :(</h1>
      <h3>The page you requested was not found.</h3>

      <Link to="/">
        {" "}
        <button className="btn-accent">Go to Homepage </button>
      </Link>
    </div>
  );
}
