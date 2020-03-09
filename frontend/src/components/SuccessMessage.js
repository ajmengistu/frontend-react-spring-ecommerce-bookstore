import React from "react";

// A generic success message within the application
const SuccessMessage = props => {
  return (
    <>
      <div className="container mt-4">
        <div key="success" className="alert alert-success" role="alert">
          {props.successMessage}
        </div>
      </div>
    </>
  );
};

export default SuccessMessage;
