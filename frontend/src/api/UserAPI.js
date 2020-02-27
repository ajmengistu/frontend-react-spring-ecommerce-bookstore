import axios from "axios";

const REMOTE_USER_API_BASE_URL = process.env.REACT_APP_REMOTE_USER_API

export function async signInUser(userCredentials) {
  return await resolve(axios.post(
    REMOTE_USER_API_BASE_URL + '/login',
    userCredentials
  )).then(res => res.data);
}
