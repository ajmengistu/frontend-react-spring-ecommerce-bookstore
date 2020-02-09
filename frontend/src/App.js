import React from "react";
import "./App.css";
import User from "./components/User";
// export const url = "https://jsonplaceholder.typicode.com/users";
export const url = "http://localhost:8080/greeting";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is from App component</p>
        <User url={url}/>
      </header>
    </div>
  );
};

export default App;