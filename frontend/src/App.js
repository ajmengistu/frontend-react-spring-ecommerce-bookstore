import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Account from "./pages/Account";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

export const JSON_PLACE_HOLDER_URL =
  "https://jsonplaceholder.typicode.com/users";
export const LOCAL_HOST_API = "http://localhost:8082/api";
// export const REMOTE_PROD_API =
// "https://bookstore-react-spring.herokuapp.com/api";

// #### Set up a prod & local testing environment #####

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/account" component={Account}></Route>
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
