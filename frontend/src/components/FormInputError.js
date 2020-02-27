import React from "react";

// A generic error message to show for invalid user form input.
const FormInputError = props => {
  return (
    <>
      <div className="alert alert-warning" role="alert">
        {props.errorMessage}
      </div>
    </>
  );
};

export default FormInputError;
