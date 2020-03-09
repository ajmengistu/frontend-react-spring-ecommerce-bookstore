import axios from "axios";
import { getJWT } from "../utils/AuthenticationService";
import { resolve } from "../utils/resolve";

// Get the base url of the remote API from .env.[development | production] file
// depending on whether the application is in development or production environment.
export const REMOTE_USER_API_BASE_URL = process.env.REACT_APP_REMOTE_USER_API;

const instance = axios.create({
  baseURL: REMOTE_USER_API_BASE_URL,
  timeout: 5000,
  headers: { "Content-type": "application/json" }
});

// A singleton service class to talk to remote User API.
class UserAPI {
  // Activate a registered user account. keyValue will be of the
  // form key=xyax-234-DAj32.
  activateAccount = async keyValue => {
    return await resolve(
      instance.get("/activate?" + keyValue).then(response => response)
    );
  };

  // Sign in an existing activated user
  signInUser = async ({ usernameOrEmail: username, password }) => {
    return await resolve(
      axios
        .post(REMOTE_USER_API_BASE_URL + "/authenticate", {
          username: username.trim(),
          password: password
          // Update server to take rememberMe
        })
        .then(response => response)
    );
  };

  // Register a new user
  registerUser = async formInput => {
    return await resolve(
      axios
        .post(REMOTE_USER_API_BASE_URL + "/register", formInput, {
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(response => response)
    );
  };

  // Get the account info of the currently authenticated user.
  getUserAccount = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + getJWT()
      }
    };
    return await resolve(
      instance.get("/account", config).then(response => response)
    );
  };

  // Update an authenticated user's account info (email, first name, and last name).
  updateUserAccount = async user => {
    const config = {
      headers: {
        Authorization: "Bearer " + getJWT()
      }
    };
    return await resolve(
      instance.post("/account", user, config).then(response => response)
    );
  };

  // Update an authenticated user's password.
  updateUserPassword = async passwordUpdateVM => {
    const config = {
      headers: {
        Authorization: "Bearer " + getJWT()
      }
    };

    return await resolve(
      instance
        .post("/account/change-password", passwordUpdateVM, config)
        .then(response => response)
    );
  };

  // Begin reset an unauthenticated user's password.
  // Purpose: for example, when a user forgets their password.
  // Parameter: {email: "", clientToken: ""}
  requestUserResetPassword = async passwordRestVM => {
    return await resolve(
      instance
        .post("/account/reset-password/init", passwordRestVM)
        .then(response => response)
    );
  };

  // Finish reset an unauthenticated user's password.
  // Purpose: reset a user's password using a key token and
  // a new password.
  // Paramater: {key: "", newPassword: ""}
  completeResetPassword = async keyAndNewPassword => {
    return await resolve(
      instance
        .post("/account/reset-password/finish", keyAndNewPassword)
        .then(response => response)
    );
  };
}

export default UserAPI = new UserAPI();
