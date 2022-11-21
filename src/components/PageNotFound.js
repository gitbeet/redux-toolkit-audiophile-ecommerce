import "../css/PageNotFound.css";

import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="container text-center">
      <h1>Sorry :(</h1>
      <p>The page you requested was not found.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}
