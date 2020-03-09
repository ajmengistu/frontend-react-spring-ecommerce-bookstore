import React, { useState } from "react";
import UserAPI from "../api/UserAPI";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import FormInputSuccess from "../components/FormInputSuccess";

// A page containing a form to allow a user to reset their password.
const ResetPasswordFinish = props => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formInput, setFormInput] = useState({
    key: "",
    newPassword: "",
    newPassword2: ""
  });

  const passwordResetTokenKey = props.match.params.key.substring(4);

  const handleSubmit = async event => {
    event.preventDefault();
    formInput.key = passwordResetTokenKey;

    setErrorMessage("");
    setSuccessMessage("");

    if (formInput.newPassword.length < 6) {
      setErrorMessage("Password must contain at least 6 characters.");
      return;
    }

    if (
      formInput.newPassword.toLocaleLowerCase() !==
      formInput.newPassword2.toLocaleLowerCase()
    ) {
      setErrorMessage("Password does not match.");
      return;
    }

    const resetPasswordData = {
      key: formInput.key,
      newPassword: formInput.newPassword
    };
    const response = await UserAPI.completeResetPassword(resetPasswordData);

    if (response.error) {
      const error = response.error.response.data.message;
      const msg =
        error +
        ". Either your token has expired or you have already reset your password with this token.";
      setErrorMessage(msg);
      return;
    }

    setSuccessMessage("Your password has been reset successfully!");
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
        {!successMessage && (
          <div>
            <form
              method="POST"
              className="form"
              autoComplete="off"
              id="resetPassword"
              noValidate=""
              onSubmit={e => handleSubmit(e)}
            >
              <div className="form-group ">
                <label className="col-sm-3 col-form-label col-form-label">
                  Enter a new password.
                </label>
                <div className="col-sm-4">
                  <input
                    type="password"
                    name="newPassword"
                    className="form-control form-control"
                    placeholder="At least 6 characters"
                    onChange={e => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className="form-group ">
                <label className="col-sm-3 col-form-label col-form-label">
                  Confirm password.
                </label>
                <div className="col-sm-4">
                  <input
                    type="password"
                    name="newPassword2"
                    className="form-control form-control"
                    placeholder="At least 6 characters"
                    onChange={e => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <button className="mt-2 ml-3 btn btn-lg btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
        {successMessage && <FormInputSuccess successMessage={successMessage} />}
        <Footer />
      </div>
    </>
  );
};

export default ResetPasswordFinish;
