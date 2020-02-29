import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import SignOut from "./components/SignOut";
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
  return (
    <>
      <NavigationBar />
      <Switch>
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/signup" component={Register}></Route>
        <Route exact path="/signout" component={SignOut}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            isUserAuthenticated() ? <Redirect to="/" /> : <SignIn />
          }
        ></Route>
        <Route exact path="/" component={Home}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
