import axios from "axios";
import { resolve } from "../utils/resolve";
import { getJWT } from "../utils/AuthenticationService";

export const REMOTE_USER_API_BASE_URL = process.env.REACT_APP_REMOTE_USER_API;

const instance = axios.create({
  baseURL: REMOTE_USER_API_BASE_URL,
  timeout: 5000,
  headers: { "Content-type": "application/json" }
});

const config = {
  headers: {
    Authorization: "Bearer " + getJWT()
  }
};

// Sign in an existing activated user
export async function signInUser({ usernameOrEmail: username, password }) {
  return await resolve(
    axios
      .post(REMOTE_USER_API_BASE_URL + "/authenticate", {
        username: username,
        password: password
        // Update server to take rememberMe
      })
      .then(response => response)
  );
}

// Register a new user
export async function registerUser(formInput) {
  return await resolve(
    axios
      .post(REMOTE_USER_API_BASE_URL + "/register", formInput, {
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(response => response)
  );
}

// Get the account info of the currently authenticated user.
export async function getUserAccount() {
  return await resolve(
    instance.get("/account", config).then(response => response)
  );
}
