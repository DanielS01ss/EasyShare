export const setTokenInLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

export const setRefreshTokenInLocalStorage = (refreshTk) => {
  localStorage.setItem("refreshToken", refreshTk);
};

export const deleteLocalStorageTokens = () => {
  localStorage.clear();
};

export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const getToken = () => {
  return localStorage.getItem("token");
};
