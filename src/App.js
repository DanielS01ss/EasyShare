import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profiler, useEffect, useState } from "react";

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
import { User } from "./Components/ClassModels";
import jwt_decode from "jwt-decode";
import { ManageLinks } from "./Components/ManageLinks/ManageLinks";

function App() {
  const GlobalContext = React.createContext();

  return (
    <div className="App">
      <GlobalContext.Provider>
        <BrowserRouter>
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
                <Route
                  path="/app/main-page"
                  element={<MainDashboardPannel />}
                />
                <Route path="/app/profile-page" element={<ProfilePage />} />
                <Route path="/app/document-list" element={<DocumentList />} />
                <Route path="/app/shared" element={<SharedDocumentPage />} />
                <Route path="/app/manage-links" element={<ManageLinks />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
