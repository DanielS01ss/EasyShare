import axios from "axios";
import {
  LOGIN_AUTH_ENDPOINT,
  GOOGLE_LOGIN_AUTH_ENDPOINT,
} from "../utils/apiEndpoints";

export const loginReq = async (email, password) => {
  try {
    const resp = await axios.post(LOGIN_AUTH_ENDPOINT, {
      email,
      password,
    });
    return resp;
  } catch (err) {
    throw err;
  }
};

export const googleLoginReq = async (id, email) => {
  try {
    const resp = await axios.post(GOOGLE_LOGIN_AUTH_ENDPOINT, {
      id,
      email,
    });
    return resp;
  } catch (err) {
    throw err;
  }
};
