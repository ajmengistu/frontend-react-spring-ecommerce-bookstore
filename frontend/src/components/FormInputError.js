import React from "react";

// A generic error message to show for invalid user form input.
const FormInputError = props => {
  return (
    <>
      {props.type === "warning" ? (
        <div className="alert alert-warning" role="alert">
          {props.errorMessage}
        </div>
      ) : (
        <div className="alert alert-success" role="alert">
          {props.successMessage}
        </div>
      )}
    </>
  );
};

export default FormInputError;
