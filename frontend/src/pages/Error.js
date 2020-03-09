import React from "react";
import { Link } from "react-router-dom";

// All other invalid url requests will be shown this page. 404 page.
const Error = () => {
  return (
    <div className="col-sm-6 container mt-4 alert alert-danger">
      The page you requested does not exist. Please 
      <Link to="/signin"> Sign in</Link> or <br></br>
      go to the <Link to="/">home page</Link>.
    </div>
  );
};

export default Error;
