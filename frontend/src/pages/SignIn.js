import React from "react";
import { withRouter } from "react-router-dom";
import { HTTP_STATUS_CODE } from "../api/status-codes";
import { signInUser } from "../api/UserAPI";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";
import {
  isUserAuthenticated,
  storeJWT,
  VALID_PASSWORD_LENGTH,
  VALID_USERNAME_LENGTH
} from "../utils/AuthenticationService";

// Account Sign in page.
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: "",
      password: "",
      rememberMe: false,
      errorMessage: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Don't need to bind arrow functions to this class in the constructor.
  handleChange = event => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };

  async handleSubmit(event) {
    event.preventDefault(); // don't refresh the page.
    const requestMethod = event.target.method.toLowerCase();

    // Validate user input
    if (requestMethod.toLowerCase() !== "post") {
      this.setState({ errorMessage: "Invalid method request." });
      return;
    } else if (this.state.password.length < VALID_PASSWORD_LENGTH) {
      this.setState({
        errorMessage: "Invalid username or password. Please try again."
      });
      return;
    } else if (this.state.usernameOrEmail.length < VALID_USERNAME_LENGTH) {
      this.setState({
        errorMessage: "Invalid username or password. Please try again."
      });
      return;
    }

    // Otherwise, attempt login.
    const serverResponse = await signInUser(this.state);
    if (
      serverResponse.error &&
      serverResponse.error.response.status === HTTP_STATUS_CODE.STATUS_401
    ) {
      this.setState({
        errorMessage: "Invalid username or password. Please try again."
      });
      return;
    }

    // User successfully logged in
    storeJWT(serverResponse.data.data.id_token);
    this.props.handleUserSignIn(isUserAuthenticated());
    this.props.history.push("/");
  }

  render() {
    return (
      <>
        <SignInForm
          errorMessage={this.state.errorMessage}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          checked={this.state.rememberMe}
        />
        <Footer />
      </>
    );
  }
}

// use withRouter in order to redirect user after login via history.push().
export default withRouter(SignIn);
