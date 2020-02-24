import React from "react";
import axios from "axios";

// A User. Note: Update User with React Hooks.
class User extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     users: []
  //   };
  // }

  // componentDidMount() {
  //   axios
  //     .get(this.props.url)
  //     .then(response => {
  //       console.log(response);
  //       const users = response.data;
  //       this.setState({
  //         users
  //       });
  //       console.log(users);
  //     })
  //     .catch(error => {
  //       const users = [{ firstName: "Error" }];
  //       this.setState({ users });
  //       console.log(error);
  //     });
  // }

  // render() {
  //   return (
  //     <div>
  //       <p>User Component</p>
  //       <ul data-testid="user-name">
  //         {this.state.users.length === 0 ? (
  //           <p data-testid="loading">Loading....</p>
  //         ) : (
  //           this.state.users.map((user, index) => (
  //             <li key={index}> {user.firstName} </li>
  //           ))
  //         )}
  //       </ul>
  //     </div>
  //   );
  // }
}

export default User;
