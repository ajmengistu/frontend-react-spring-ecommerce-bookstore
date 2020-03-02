import React from "react";

const Loading = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-2 ">
        <div
          className="spinner-border"
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        ></div>
      </div>
    </>
  );
};

export default Loading;
