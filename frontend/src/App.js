import React from "react";
import "./App.css";
import User from "./components/User";
import axios from "axios";
export const urls = "https://jsonplaceholder.typicode.com/users";
// export const url = "http://localhost:8081/greeting";
export const url = "https://bookstore-react-spring.herokuapp.com/api";
// const App = () => {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get(urls).then(response => {
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
                <li key={index}>user: {user.name}, email: {user.email}</li>
              ))
            )}
          </ul>
          <User url={url} />
        </header>
      </div>
    );
  }
}
export default App;
