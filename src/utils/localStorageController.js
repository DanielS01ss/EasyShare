export const saveJWTInLocalStorage = (value) => {
  localStorage.setItem("jwt", value);
};

export const saveRefreshJWTInLocalStorage = (value) => {
  localStorage.setItem("refreshJwt", value);
};

export const getJWTFromLocalStorage = () => {
  return localStorage.getItem("jwt");
};

export const getRefreshJWTFromLocalStorage = () => {
  return localStorage.getItem("refreshJwt");
};
