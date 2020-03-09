import React, { useState } from "react";
import UserAPI from "../api/UserAPI";
import { REACT_APP_HOST_ORIGIN } from "../utils/AuthenticationService";
import Footer from "../components/Footer";
import FormResetPassword from "../components/FormResetPassword";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";

// A password reset page to allow an unauthenticated user to provide
// an email address to send a password reset token to.
const ResetPassword = props => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formInput, setFormInput] = useState({
    email: "",
    clientOrigin: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const host_origin = REACT_APP_HOST_ORIGIN;
    formInput.clientOrigin = host_origin;
    const response = await UserAPI.requestUserResetPassword(formInput);

    setErrorMessage("");
    setSuccessMessage("");

    if (response.error) {
      const error = response.error.response.data.message;
      setErrorMessage(error);
      return;
    }

    setSuccessMessage(
      "An email has been sent to you with instructions to reset your password."
    );
  };

  const handleChange = event => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <div className="container mt-4">
        <h5>Password Reset</h5>
        {errorMessage && (
          <ErrorMessage type="warning" errorMessage={errorMessage} />
        )}
        {successMessage && <SuccessMessage successMessage={successMessage} />}
        {!successMessage && (
          <FormResetPassword
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
        <Footer />
      </div>
    </>
  );
};

export default ResetPassword;
