import React from "react";

// A generic error message within the application
const SuccessMessage = props => {
  return (
    <>
      <div className="container mt-4">
        {props.type === "warning" ? (
          <div key="warning" className="alert alert-warning" role="alert">
            {props.errorMessage}
          </div>
        ) : (
          <div key="danger" className="alert alert-danger" role="alert">
            {props.errorMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default SuccessMessage;
