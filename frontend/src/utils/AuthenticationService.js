
export const VALID_PASSWORD_LENGTH = 6;
export const VALID_USERNAME_LENGTH = 2;

export function isUserAuthenticated(status = false) {
  return status;
}

export function signInUser(credentials) {
  console.log(credentials);

  // axios.post()
}

export function signOutUser() {
  console.log("signing Out user!!");
}
