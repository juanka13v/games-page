import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container">
        <h2>404</h2>
      <h3>Page not found</h3>
      <p>
        Uh oh, we can´t seem to find the page you´re looking for. Try going back
        to the previous page.
      </p>

      <Link to='/'>
      <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
