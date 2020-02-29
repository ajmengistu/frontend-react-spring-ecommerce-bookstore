import React from "react";

// A component to handle a user signing out of their account.
const SignOut = props => {
  return <>{props.history.push("/")}</>;
};

export default SignOut;
