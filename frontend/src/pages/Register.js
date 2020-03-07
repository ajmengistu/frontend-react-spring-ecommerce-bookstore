import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { HTTP_STATUS_CODE } from "../api/status-codes";
import UserAPI from "../api/UserAPI";
import AccountRegistrationForm from "../components/AccountRegistrationForm";
import Footer from "../components/Footer";
import FormInputSuccess from "../components/FormInputSuccess";
import {
  VALID_PASSWORD_LENGTH,
  VALID_USERNAME_LENGTH
} from "../utils/AuthenticationService";

// Account Registration page with React Hooks.
const Register = props => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    password2: ""
  });

  const handleChange = event => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault(); // don't refresh page after user submits form.

    setSuccessMessage("");
    const requestMethod = event.target.method.toLowerCase();

    if (requestMethod !== "post") {
      setErrorMessage("Invalid method request.");
    } else if (formInput.password.length < VALID_PASSWORD_LENGTH) {
      setErrorMessage("Passwords must be at least 6 characters.");
    } else if (
      formInput.password.toLowerCase() !== formInput.password2.toLowerCase()
    ) {
      setErrorMessage("Password does not match.");
    } else if (formInput.username.length < VALID_USERNAME_LENGTH) {
      setErrorMessage("Username is too short.");
    } else {
      setErrorMessage("");
      const response = await UserAPI.registerUser(formInput);
      if (response.error) {
        // NOTE:
        // response.error.response.data looks like this:
        // {
        // timestamp: "2020-02-28T01:08:30.481+0000"
        // status: 400
        // error: "Bad Request"
        // message: "Username hello already used!"
        // path: "/api/register
        //}
        const serverResponse = response.error.response.data;
        // Username or email has already been used.
        setErrorMessage(serverResponse.message);
      } else {
        // A new user account has been successfully created,
        // but needs to be activated via email.
        if (response.data.status === HTTP_STATUS_CODE.STATUS_201) {
          setSuccessMessage(
            "Success! A Bookstore account has been created for you. An email has been sent to " +
              formInput.email +
              " to activate your account."
          );
        }
      }
    }
  };

  return (
    <>
      {successMessage ? (
        <FormInputSuccess successMessage={successMessage} />
      ) : (
        <AccountRegistrationForm
          errorMessage={errorMessage}
          successMessage={successMessage}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      <Footer />
    </>
  );
};

export default withRouter(Register);
