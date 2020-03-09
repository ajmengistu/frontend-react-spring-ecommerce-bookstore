import React from "react";
import FormInputError from "./FormInputError";

// A form component to update a user's password.
const UpdatePassword = props => {
  return (
    <>
      <div className="container">
        <div className="mt-4 ml-0">
          <h4>Update Password</h4>
          {/* Update success or error message */}
          <div className="ml-3 mt-4">
            {props.errorMessage && (
              <FormInputError
                type="warning"
                errorMessage={props.errorMessage}
              />
            )}
          </div>
          {props.successMessage && (
            <div className="container  mt-4">
              <div key="success" className="alert alert-success" role="alert">
                {props.successMessage}
                <div></div>
              </div>
            </div>
          )}
        </div>
        <form
          method="POST"
          className="form"
          autoComplete="off"
          id="updateProfile"
          noValidate=""
          onSubmit={e => props.handleSubmit(e)}
        >
          <div className="form-group ">
            <label className="col-sm-3 col-form-label col-form-label">
              Current Password:
            </label>
            <div className="col-sm-4">
              <input
                value={props.currentPassword}
                type="password"
                name="currentPassword"
                className="form-control form-control"
                onChange={e => props.handleChange(e)}
                required
              />
            </div>
          </div>

          <div className="form-group ">
            <label className="col-sm-3 col-form-label col-form-label">
              New Password:
            </label>
            <div className="col-sm-4">
              <input
                value={props.newPassword}
                type="password"
                name="newPassword"
                className="form-control form-control"
                placeholder="At least 6 characters"
                onChange={e => props.handleChange(e)}
                required
              />
            </div>
          </div>

          <div className="form-group ">
            <label className="col-sm-3 col-form-label col-form-label">
              Repeat Password:
            </label>
            <div className="col-sm-4">
              <input
                value={props.newPassword2}
                type="password"
                name="newPassword2"
                className="form-control form-control"
                placeholder="At least 6 characters"
                onChange={e => props.handleChange(e)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <button className="mt-2 ml-3 btn btn-lg btn-primary">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePassword;
