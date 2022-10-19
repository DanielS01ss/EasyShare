import "./App.css";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import DocumentList from "./Components/MainDashboard/DocumentList";
import EmailSentConfirmation from "./Components/Authentication-Components/EmailSentConfirmation";
import ForgotPasswordCard from "./Components/Authentication-Components/ForgotPasswordCard";
import GreetingPage from "./Components/GreetingPage";
import LoginCard from "./Components/Authentication-Components/LoginCard";
import MainDashboardPage from "./Components/MainDashboard/MainDashboardPage";
import MainDashboardPannel from "./Components/MainDashboard/MainDashboardPannel";
import MainPage from "./Components/MainPage.js";
import { NotFound } from "./Components/NotFound/NotFound";
import { PrivateRoutes } from "./Components/PrivateRoutes/PrivateRoutes";
import ProfilePage from "./Components/ProfilePage";
import React from "react";
import SharedDocumentPage from "./Components/SharedDocumentPage";
import SignUp from "./Components/Authentication-Components/SignUp";
import SuccessRegister from "./Components/Authentication-Components/SuccessRegister";
import jwt_decode from "jwt-decode";
import { ManageLinks } from "./Components/ManageLinks/ManageLinks";
import { googleLoginReq } from "./Requests/authenticationRequests";
import {
  setTokenInLocalStorage,
  setRefreshTokenInLocalStorage,
} from "../src/utils/localStorage";

function App() {
  const GlobalContext = React.createContext();
  const navigate = useNavigate();
  let loggedUser;
  const [user, setUser] = useState({});

  const handleCallbackResponse = async (response) => {
    const res = jwt_decode(response.credential);
    const id = res.sub;
    const email = res.email;
    try {
      const resp = await googleLoginReq(id, email);
      setTokenInLocalStorage(resp.data.token);
      setRefreshTokenInLocalStorage(resp.data.refreshToken);
      navigate("/app/main-page");
    } catch (err) {
      console.log(err);
    }
    document.getElementById("signInWithGoogle").hidden = true;
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "231967582415-gd49ib3e0agjqa7knoo4o5d876bu779e.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInWithGoogle"),
      { theme: "outline", size: "large" }
    );
  }, []);

  //no user sign in   /// have user : show log out buttonbutton

  return (
    <div className="App">
      <Routes>
        <Route element={<MainPage />}>
          <Route path="/" element={<GreetingPage />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPasswordCard />} />
          <Route
            path="/confirmed-sent-email"
            element={<EmailSentConfirmation />}
          />
          <Route path="/success-register" element={<SuccessRegister />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/app" element={<MainDashboardPage />}>
            <Route path="/app/main-page" element={<MainDashboardPannel />} />
            <Route path="/app/profile-page" element={<ProfilePage />} />
            <Route path="/app/document-list" element={<DocumentList />} />
            <Route path="/app/shared" element={<SharedDocumentPage />} />
            <Route path="/app/manage-links" element={<ManageLinks />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
