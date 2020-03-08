export const VALID_PASSWORD_LENGTH = 6;
export const VALID_USERNAME_LENGTH = 2;
export const REACT_APP_HOST_ORIGIN = window.location.origin;

export function isUserAuthenticated() {
  const jwt = getJWT();
  if (jwt) {
    return true;
  }
  return false;
}

export function signOutUser() {
  localStorage.removeItem("JWT");
}

export function storeJWT(jwt) {
  localStorage.setItem("JWT", jwt);
}

export function getJWT() {
  return localStorage.getItem("JWT");
}
