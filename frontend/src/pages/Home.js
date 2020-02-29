import React from "react";
import { isUserAuthenticated } from "../utils/AuthenticationService";
// import "./Home.css";

const Home = () => {
  return (
    <>
    {console.log(isUserAuthenticated())}
      <div>This is the home page!</div>;
    </>
  );
};

export default Home;
