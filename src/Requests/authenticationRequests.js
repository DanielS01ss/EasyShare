import axios from "axios";
import { LOGIN_AUTH_ENDPOINT } from "../utils/apiEndpoints";

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
