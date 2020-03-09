import React from "react";

// A form to reset a Users password.
const FormResetPassword = props => {
  return (
    <>
      <form
        method="POST"
        className="form"
        autoComplete="off"
        id="resetPassword"
        noValidate=""
        onSubmit={e => props.handleSubmit(e)}
      >
        <div className="form-group ">
          <label className="col-sm-3 col-form-label col-form-label">
            Enter an email address associated with your account.
          </label>
          <div className="col-sm-4">
            <input
              type="email"
              name="email"
              className="form-control form-control"
              placeholder="example@example.com"
              onChange={e => props.handleChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <button className="mt-2 ml-3 btn btn-lg btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormResetPassword;
