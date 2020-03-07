import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Redirect, Route, Switch } from "react-router-dom";
import UserAPI from "./api/UserAPI";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { isUserAuthenticated } from "./utils/AuthenticationService";

// A generic private route component to verify authenticated users.
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isUserAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const App = () => {
  const [, setHasUserSuccessfullySignedIn] = useState(isUserAuthenticated());
  const [accountUser, setAccountUser] = useState({});

  // Note:
  // setHasUserSuccessfullySignedIn function Hook is called when a user successfully signs in,
  // thus re-rendering the App component. Subsequently, it will send props down to NavigationBar
  // component. In the NavigationBar, isUserAuthenticated() function will be invoked updating
  // the sign in button to sign out in the navbar.
  const handleUserSignIn = async isUserSignedIn => {
    setHasUserSuccessfullySignedIn(isUserSignedIn);
    // const response = await UserAPI.getUserAccount();
    // const account = response.data.data;
    // setAccountUser({
    //   firstName: account.firstName,
    //   lastName: account.lastName
    // });
  };

  return (
    <>
      <Helmet bodyAttributes={{ style: "background-color: #f5f5f5" }} />
      <NavigationBar accountUser={accountUser} />
      <Switch>
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/signup" component={Register}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            isUserAuthenticated() ? (
              <Redirect to="/" />
            ) : (
              <SignIn handleUserSignIn={handleUserSignIn} />
            )
          }
        ></Route>
        <Route exact path="/" component={Home}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
