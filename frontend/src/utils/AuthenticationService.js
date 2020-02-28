export const VALID_PASSWORD_LENGTH = 6;
export const VALID_USERNAME_LENGTH = 2;

export function isUserAuthenticated() {
  if (getJWT()) return true;
  return false;
}

export function signOutUser() {
  console.log("signing Out user!!");
  localStorage.removeItem("JWT");
}

export function storeJWT(jwt) {
  localStorage.setItem("JWT", jwt);
}

export function getJWT() {
  return localStorage.getItem("JWT");
}
