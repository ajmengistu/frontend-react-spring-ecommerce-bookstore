import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { resolve } from "../utils/resolve";

// Home page.
const Home = () => {
  const [users, setUsers] = useState([{ name: "Error" }]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await resolve(
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(response => response)
      );
      const data = response.data.data;
      setUsers(data);
    };
    getUsers();
  }, []);
  return (
    <>
      <div className="container mt-4">
        <h4> This is the home page!</h4>
        <div>
          <ul data-testid="user-name">
            {users.length === 0 ? (
              <p data-testid="loading">Loading....</p>
            ) : (
              users.map((user, index) => <li key={index}> {user.name} </li>)
            )}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
