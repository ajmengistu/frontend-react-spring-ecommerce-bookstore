import React from "react";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";
import { signInUser } from "../utils/AuthenticationService";

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

  // Don't need to bind arrow functions in the constructor.
  handleChange = event => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({
      [event.target.name]: value
    });
  };

  verifySubmission = (event) => {
    const requestMethod = event.target.method.toLowerCase();
    if (requestMethod !== "post") {
      this.setState({ errorMessage: "Invalid method request." });
    }
  };

  handleSubmit(event) {
    event.preventDefault(); // don't refresh the page.
    this.verifySubmission(event);
    signInUser(this.state);
  }

  render() {
    return (
      <>
        <SignInForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          checked={this.state.rememberMe}
        />
        <Footer />
      </>
    );
  }
}

export default SignIn;
