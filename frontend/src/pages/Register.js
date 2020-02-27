import React, { useState } from "react";
import AccountRegistrationForm from "../components/AccountRegistrationForm";
import Footer from "../components/Footer";
import { VALID_PASSWORD_LENGTH } from "../utils/AuthenticationService";

// Account Registration page with React Hooks.
const Register = props => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password1: "",
    password2: ""
  });

  const handleChange = event => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const verifySubmission = event => {
    const requestMethod = event.target.method.toLowerCase();
    if (requestMethod !== "post") {
      setErrorMessage("Invalid method request.");
    } else if (formInput.password1.length < VALID_PASSWORD_LENGTH) {
      setErrorMessage("Passwords must be at least 6 characters.");
    } else if (
      formInput.password1.toLowerCase() !== formInput.password2.toLowerCase()
    ) {
      setErrorMessage("Password does not match.");
    }
  };

  const handleSubmit = event => {
    event.preventDefault(); // don't refresh page after user submits form.
    verifySubmission(event);

    // register user
    // send error if username or email already exists
  };

  return (
    <>
      <AccountRegistrationForm
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </>
  );
};

export default Register;
