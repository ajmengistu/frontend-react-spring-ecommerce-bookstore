import axios from "axios";
import { resolve } from "../utils/resolve";
// import { getJWT } from "../utils/AuthenticationService";

export const REMOTE_USER_API_BASE_URL = process.env.REACT_APP_REMOTE_USER_API;

export default axios.create({
  baseURL: REMOTE_USER_API_BASE_URL
});

const config = {
  header: {
    "Content-type": "application/json"
  }
};

// const postConfig = {
//   header: {
//     "Content-type": "application/json",
//     Authorization: "Bearer" + " " + getJWT()
//   }
// };

export async function signInUser({
  usernameOrEmail: username,
  password,
  rememberMe
}) {
  return await resolve(
    axios
      .post(
        REMOTE_USER_API_BASE_URL + "/authenticate",
        {
          username: username,
          password: password
          // Update server to take rememberMe
        },
        config
      )
      .then(response => response)
  );
}

export async function registerUser(formInput) {
  return await resolve(
    axios
      .post(REMOTE_USER_API_BASE_URL + "/register", formInput, config)
      .then(response => response)
  );
}

export async function getUserAccount() {
  //   return await resolve(
  //     axios.get(REMOTE_USER_API_BASE_URL + "/account", postConfig)
  //   );
}
