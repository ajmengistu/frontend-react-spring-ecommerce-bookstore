import axios from "axios";
import { resolve } from "../utils/resolve";

export const REMOTE_USER_API_BASE_URL = process.env.REACT_APP_REMOTE_USER_API;

export default axios.create({
  baseURL: REMOTE_USER_API_BASE_URL
});

export async function signInUser(userCredentials) {
  return await resolve(
    axios
      .post(REMOTE_USER_API_BASE_URL + "/login", userCredentials)
      .then(res => res.data)
  );
}

export async function registerUser(formInput) {
  const config = {
    header: {
      "Content-type": "application/json"
    }
  };
  return await resolve(
    axios
      .post(REMOTE_USER_API_BASE_URL + "/register", formInput, config)
      .then(response => response)
  );
}
