import React from "react";
import { Link } from "react-router-dom";

// A generic success message to render successful user form input.
const FormInputSuccess = props => {
  return (
    <>
      <div className="container mt-4">
        <div key="success" className="alert alert-success" role="alert">
          {props.successMessage}
          <div>
            <br></br>
            <Link to="/signin">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInputSuccess;
