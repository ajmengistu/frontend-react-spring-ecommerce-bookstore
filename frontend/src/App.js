import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Account from "./pages/Account";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

export const JSON_PLACE_HOLDER_URL =
  "https://jsonplaceholder.typicode.com/users";
export const LOCAL_HOST_API = "http://localhost:8082/api";
// export const REMOTE_PROD_API =
// "https://bookstore-react-spring.herokuapp.com/api";

// #### Set up a prod & local testing environment #####

// A generic private route component to verify authenticated users.
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        false ? (
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
      <Switch>
        <PrivateRoute exact path="/account" component={Account} />
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/signup" component={Register}></Route>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
