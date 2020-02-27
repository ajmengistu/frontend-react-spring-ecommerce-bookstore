import React from "react";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";

// Account Sign in page.
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: "",
      password: "",
      rememberMe: false
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

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    console.log(event.target);
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
