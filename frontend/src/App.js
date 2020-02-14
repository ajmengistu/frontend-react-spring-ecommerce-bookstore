import React from "react";
import "./App.css";
import User from "./components/User";
import axios from "axios";
export const JSON_PLACE_HOLDER_URL =
  "https://jsonplaceholder.typicode.com/users";
// export const LOCAL_HOST_API = "http://localhost:8082/api";
export const REMOTE_PROD_API =
  "https://bookstore-react-spring.herokuapp.com/api";

// #### Set up a prod & local testing environment #####

// const App = () => {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get(JSON_PLACE_HOLDER_URL).then(response => {
      console.log(response);
      const users = response.data;
      this.setState({
        users
      });
      console.log(users);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>This is from App component</p>
          <ul data-testid="user-name">
            {this.state.users.length === 0 ? (
              <p data-testid="loading">Loading....</p>
            ) : (
              this.state.users.map((user, index) => (
                <li key={index}>
                  user: {user.name}, email: {user.email}
                </li>
              ))
            )}
          </ul>
          {/* <User url={LOCAL_HOST_API} /> */}
          <User url={REMOTE_PROD_API} />
        </header>
      </div>
    );
  }
}
export default App;
