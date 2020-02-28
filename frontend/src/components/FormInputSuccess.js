import React from "react";
import Helmet from "react-helmet";

// A generic success message to render successful user form input.
const FormInputSuccess = props => {
  return (
    <>
      <Helmet bodyAttributes={{ style: "background-color: #f5f5f5" }} />
      <div className="container mt-4">
        <div key="success" className="alert alert-success" role="alert">
          {props.successMessage}
        </div>
      </div>
    </>
  );
};

export default FormInputSuccess;
