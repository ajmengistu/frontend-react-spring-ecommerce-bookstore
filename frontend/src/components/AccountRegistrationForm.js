import React from "react";
import Helmet from "react-helmet";

// Account registration form to register new users for an account.
const AccountRegistrationForm = () => {
  return (
    <>
      <Helmet bodyAttributes={{ style: "background-color: #f5f5f5" }} />
      <div className="container">
        <div className="row">
          <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-lg-6 col-md-12 mx-auto">
                <div className="card rounded shadow">
                  <h3 className="mt-4 mb-4 text-center">Create an account</h3>
                  <span className="ml-4">
                    Already have an account? <a href="/signin">Sign in</a>
                  </span>
                  <div className="card-body">
                    <form
                      className="form"
                      autoComplete="off"
                      id="formRegister"
                      noValidate=""
                      method="POST"
                    >
                      {/* Username */}
                      <div className="form-group">
                        <label className="font-weight-bold">Username</label>
                        <input
                          autoFocus
                          type="text"
                          className="form-control form-control-lg rounded"
                          name="inputUsername"
                          id="inputUsername"
                          required
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <label className="font-weight-bold">Email</label>
                        <input
                          type="email"
                          className="form-control form-control-lg rounded"
                          name="inputEmail"
                          id="inputEmail"
                          required
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>

                      {/* First name */}
                      <div className="form-group">
                        <label className="font-weight-bold">First name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded"
                          name="inputFirstName"
                          id="inputFirstName"
                          required
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>
                      {/* Last name */}
                      <div className="form-group">
                        <label className="font-weight-bold">Last name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg rounded"
                          name="inputLastName"
                          id="inputLastName"
                          required
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>
                      {/* Password */}
                      <div className="form-group">
                        <label className="font-weight-bold">Password</label>
                        <input
                          placeholder="At least 6 characters"
                          type="password"
                          className="form-control form-control-lg rounded"
                          name="inputPassword"
                          id="inputPassword"
                          required
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>
                      {/* Re-enter password */}
                      <div className="form-group">
                        <label className="font-weight-bold">
                          Re-enter password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg rounded"
                          name="inputPassword2"
                          id="inputPassword2"
                          required
                        />
                        <div className="invalid-feedback">
                          Enter your password too!
                        </div>
                      </div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="mt-2 btn btn-lg btn-primary btn-block"
                        id="btnCreateAccount"
                      >
                        Create your Bookstore account
                      </button>
                      {/* Condition of Use and Privacy Notice */}
                      <p className="mt-5 mb-3 text-muted text-center">
                        By creating an account, you agree to Bookstore's
                        Conditions of Use and Privacy Notice.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AccountRegistrationForm;
