import React from "react";
import { withRouter } from "react-router-dom";
import { HTTP_STATUS_CODE } from "../api/status-codes";
import UserAPI from "../api/UserAPI";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";
import {
  isUserAuthenticated,
  storeJWT,
  VALID_PASSWORD_LENGTH,
  VALID_USERNAME_LENGTH
} from "../utils/AuthenticationService";
import Loading from "../components/Loading";

// Account Sign in page.
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: "",
      password: "",
      rememberMe: false,
      errorMessage: "",
      isLoading: false
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
    this.setState({ ...(this.state.isLoading = true) });
    const serverResponse = await UserAPI.signInUser(this.state);
    this.setState({ ...(this.state.isLoading = false) });

    if (
      serverResponse.error &&
      serverResponse.error.response.status === HTTP_STATUS_CODE.STATUS_401
    ) {
      // TODO:
      // Give an accurate error if an account has not been activated yet. using
      // the returned status code

      this.setState({
        errorMessage: "Invalid username or password. Please try again."
      });
      return;
    }

    // User successfully logged in
    storeJWT(serverResponse.data.data.id_token);
    // This prop handleUserSignIn is from from App.js to re-render
    // the main navbar to update the sign in button to sign out button.
    this.props.handleUserSignIn(isUserAuthenticated());

    // Route to the last Private requsted page before signing in.
    // Note: non-private/public page requests will result in
    // previousPage variable to be null.
    const previousPage = this.props.location.state;
    if (previousPage) {
      this.props.history.push(previousPage.from.pathname);
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
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
