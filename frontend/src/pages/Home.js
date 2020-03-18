import axios from "axios";
import { REMOTE_USER_API_BASE_URL } from "../api/UserAPI";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { resolve } from "../utils/resolve";
import Loading from "../components/Loading";

// Home page.
const Home = () => {
  const [users, setUsers] = useState([{}]);
  const [isLoading, setLoading] = useState(false);
  const [apiUsers, setApiUsers] = useState([{}]);

  useEffect(() => {
    let unmounted = false;

    const getUsers = async () => {
      setLoading(true);
      const response = await resolve(
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(response => response)
      );
      setLoading(false);
      const apiResponse = await resolve(
        axios
          .get(REMOTE_USER_API_BASE_URL + "/users")
          .then(response => response)
      );

      let data = [{}];
      let apiData = [{}];

      if (response.error || apiResponse.error) {
        console.log(response);
        console.log(apiResponse);
      } else {
        data = response.data.data;
        apiData = apiResponse.data.data;
      }

      if (!unmounted) {
        setUsers(data);
        setApiUsers(apiData);
      }
    };
    getUsers();

    return () => {
      unmounted = true;
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container mt-4">
        <h4> This is the home page! {process.env.REACT_APP_REMOTE_USER_API}</h4>
        <div>
          <ul data-testid="user-name">
            {users.map((user, index) => (
              <li key={index}> {user.name} </li>
            ))}
          </ul>
          <hr></hr>
          <ul>
            {apiUsers.map((user, index) => (
              <li key={index}> {user.username} </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
