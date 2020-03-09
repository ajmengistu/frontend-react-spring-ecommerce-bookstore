import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FormInputError from "../components/FormInputError";
import logo from "../images/logo.png";

// A form component to allow a user to enter their
// username or email and password.
const SignInForm = props => {
  return (
    <>
      <Helmet bodyAttributes={{ style: "background-color: #f5f5f5" }} />
      <div className="container">
        <div className="row">
          <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-lg-5 col-md-12 mx-auto">
                <div className="rounded">
                  <div className="">
                    <a href="/">
                      <img
                        className="rounded mx-auto d-block"
                        src={logo}
                        alt="logo"
                      />
                    </a>
                    <h3 className="mt-0 mb-4 text-center">Sign in</h3>
                  </div>
                  <div className="">
                    <form
                      className="form"
                      autoComplete="off"
                      id="formSignIn"
                      noValidate=""
                      method="POST"
                      onSubmit={e => props.handleSubmit(e)}
                    >
                      {props.errorMessage && (
                        <FormInputError
                          type="danger"
                          errorMessage={props.errorMessage}
                        />
                      )}
                      <div className="form-group">
                        <input
                          autoFocus
                          placeholder="Username or email address"
                          type="text"
                          className="form-control form-control-lg rounded"
                          name="usernameOrEmail"
                          id="inputUsernameOrEmail"
                          onChange={e => props.handleChange(e)}
                          required
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          placeholder="Password"
                          type="password"
                          className="form-control form-control-lg rounded"
                          name="password"
                          id="iputPassword"
                          onChange={e => props.handleChange(e)}
                          // value="pass"
                          required
                        />
                        <div className="invalid-feedback">
                          Enter your password too!
                        </div>
                      </div>
                      <div>
                        <p>
                          <Link to="/reset/password">Forgot password?</Link>
                        </p>
                        <label className="">
                          <input
                            type="checkbox"
                            checked={props.rememberMe}
                            name="rememberMe"
                            onChange={e => props.handleChange(e)}
                          />
                          <span className="ml-2">Remember me </span>
                        </label>
                      </div>
                      <button
                        className="mt-2 btn btn-lg btn-primary btn-block"
                        id="btnSignIn"
                      >
                        Sign in
                      </button>
                      <p className="mt-3 mb-3">
                        <Link to="/signup">Create an account</Link>
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
export default SignInForm;
