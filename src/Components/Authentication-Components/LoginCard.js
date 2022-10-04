import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import GoogleLogo from "../../Media/google-icon.jpg";
import { Link } from "react-router-dom";
import { isValidEmail } from "../../utils/isValidEmail";
import { useNavigate } from "react-router-dom";
import {
  loginReq,
  googleLoginReq,
} from "../../Requests/AuthenticationRequests";
import {
  saveJWTInLocalStorage,
  saveRefreshJWTInLocalStorage,
} from "../../utils/localStorageController";
import { Google } from "@mui/icons-material";
import { GOOGLE_CLIENT_ID } from "../../utils/getDotEnvConstants";
import jwt from "jsonwebtoken";

const LoginCard = () => {
  const navigate = useNavigate();
  const [validEmail, setValidEmail] = useState(true);
  const [submitIsActive, setSubmitIsActive] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordFirstEntry, setPasswordFirstEntry] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectCredentials, setInccorectCredentials] = useState(false);
  const googleLoginRef = useRef(null);
  const [formData, setFormData] = useState({
    emailValid: false,
    passwordNotEmpty: false,
  });

  const checkValidEmail = (e) => {
    const newObj = { ...formData };
    const validEmail = isValidEmail(e.target.value);
    setValidEmail(validEmail);
    newObj.emailValid = validEmail;
    setFormData({ ...newObj });
  };

  const checkPasswordField = (e) => {
    const newObj = { ...formData };
    if (e.target.value.length === 0) {
      setPasswordEmpty(true);
      newObj.passwordNotEmpty = false;
    } else {
      setPasswordEmpty(false);
      newObj.passwordNotEmpty = true;
    }
    setFormData({ ...newObj });
  };

  const handleLoginUser = async () => {
    let resp;
    try {
      resp = await toast.promise(loginReq(email, password), {
        pending: "Loggin in...",
        error: "There was a problem logging in!",
      });
      saveJWTInLocalStorage(resp.data.token);
      saveRefreshJWTInLocalStorage(resp.data.refreshToken);
      navigate("/app/main-page");
    } catch (err) {
      debugger;
      if (err.response.status === 400) {
        if (err.response.data.message === "Incorrect password") {
          setInccorectCredentials(true);
        }
      } else if (err.response.status === 404) {
        setInccorectCredentials(true);
      }
    }
  };

  const handleGoogleInitialize = async (response, err) => {
    if (err) {
    }
    console.log(err);
    console.log(response);
    const jwtResp = response.credential;
    const decoded_jwt = jwt.decode(jwtResp);
    let resp;
    try {
      resp = await toast.promise(googleLoginReq(email, password), {
        pending: "Loggin in...",
        error: "There was a problem logging in!",
      });
      saveJWTInLocalStorage(resp.data.token);
      saveRefreshJWTInLocalStorage(resp.data.refreshToken);
      navigate("/app/main-page");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (password.length < 8) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  }, [password]);

  useEffect(() => {
    console.log(process.env.GOOGLE_CLIENT_ID);
  }, []);

  useEffect(() => {
    /* global google */
    if (googleLoginRef.current) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogleInitialize,
      });
      google.accounts.id.renderButton(googleLoginRef.current, {
        theme: "filled_blue",
      });
    }
  }, [googleLoginRef.current]);

  return (
    <div class="pt-20 pb-20 flex justify-center items-center h-screen ">
      <ToastContainer />
      <div class="w-96 bg-white shadow-md border border-gray-200 rounded-lg max-w-xl p-8 sm:p-6 lg:p-10 dark:bg-gray-800 dark:border-gray-700">
        {incorrectCredentials && (
          <div className="flex flex-row justify-center w-full mb-5">
            <div className="file-upload-error-dialog">
              <p className="text-md text-red-600">
                Incorrect username/password
              </p>
            </div>
          </div>
        )}
        <form class="space-y-6" action="#">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <div>
            <label
              for="email"
              class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(e) => {
                checkValidEmail(e);
                setEmail(e.target.value);
              }}
              placeholder="name@email.com"
              required=""
            />
            {!validEmail && (
              <p className="text-red-600">Email address is not valid!</p>
            )}
          </div>
          <div>
            <label
              for="password"
              class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
              onChange={(e) => {
                checkPasswordField(e);
                setPassword(e.target.value);
                setPasswordFirstEntry(false);
              }}
            />
            {!isPasswordValid && !passwordFirstEntry && (
              <p className="text-red-600">
                Password should be at least 8 characters long!
              </p>
            )}
          </div>
          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div class="text-sm ml-3">
                <label
                  for="remember"
                  class="font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <Link
              to="/forgot-password"
              class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
            >
              Lost Password?
            </Link>
          </div>
          <div>
            {formData.emailValid &&
            formData.passwordNotEmpty &&
            !passwordFirstEntry &&
            isPasswordValid ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLoginUser();
                }}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
            ) : (
              <button
                className="w-full text-white bg-blue-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled
              >
                Login to your account
              </button>
            )}
          </div>
          <div id="signInWithGoogle" ref={googleLoginRef}></div>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
