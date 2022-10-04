import axios from "axios";
import { LOGIN_ENDPOINT, GOOGLE_LOGIN_ENDPOINT } from "../utils/API__ENDPOINTS";

export const loginReq = async (email, password) => {
  try {
    const result = await axios.post(LOGIN_ENDPOINT, {
      email,
      password,
    });
    return result;
  } catch (err) {
    throw err;
  }
};

export const googleLoginReq = async (googleUserId) => {
  try {
    const result = await axios.post(GOOGLE_LOGIN_ENDPOINT, {
      id: googleUserId,
    });
    return result;
  } catch (err) {
    throw err;
  }
};
