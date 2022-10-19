import { getToken, getRefreshToken } from "./localStorage";
import jwtDecode from "jwt-decode";

export const validateJWTs = () => {
  const token = getToken();
  const refreshTk = getRefreshToken();
  if (!token || !refreshTk) return false;
  const decodedToken = jwtDecode(token);
  const decodedRefreshToken = jwtDecode(refreshTk);

  return (
    Date.now() - decodedToken.exp * 1000 < 0 ||
    Date.now() - decodedRefreshToken.exp * 1000 < 0
  );
};
