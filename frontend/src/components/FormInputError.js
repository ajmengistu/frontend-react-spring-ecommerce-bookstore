import React from "react";

// A generic error message to show for invalid user form input.
const FormInputError = props => {
  return (
    <>
      {props.type === "warning" ? (
        <div key="warning" className="alert alert-warning" role="alert">
          {props.errorMessage}
        </div>
      ) : (
        [
          props.type === "danger" ? (
            <div key="danger" className="alert alert-danger" role="alert">
              {props.errorMessage}
            </div>
          ) : (
            <div key="success" className="alert alert-success" role="alert">
              {props.successMessage}
            </div>
          )
        ]
      )}
    </>
  );
};

export default FormInputError;
