import React from "react";
import { Helmet } from "react-helmet";
import logo from "../images/logo.png";

const SignInForm = () => {
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
                        alt="Site logo"
                      />
                    </a>
                  </div>
                  <h3 className="mt-0 mb-4 text-center">Sign in</h3>
                  <div className="">
                    <form
                      className="form"
                      autoComplete="off"
                      id="formSignIn"
                      noValidate=""
                      method="POST"
                    >
                      <div className="form-group">
                        <input
                          autoFocus
                          placeholder="Username or email address"
                          type="email"
                          className="form-control form-control-lg rounded"
                          name="inputUsername"
                          id="inputUsername"
                          required
                        />
                        <div className="invalid-feedback">
                          Oops, you missed this one.
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control form-control-lg rounded"
                          id="iputPassword"
                          autoComplete="new-password"
                          required
                        />
                        <div className="invalid-feedback">
                          Enter your password too!
                        </div>
                      </div>
                      <div>
                        <label className="">
                          <input type="checkbox" value="remember-me" />
                          <span className="ml-2">Remember me </span>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="mt-2 btn btn-lg btn-primary btn-block"
                        id="btnSignIn"
                      >
                        Sign in
                      </button>
                      <p className="mt-5 mb-3">
                        <a href="/signup"> Create an account</a>
                      </p>

                      <p className="mt-5 mb-3 text-muted text-center">
                        © Bookstore 2020
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
