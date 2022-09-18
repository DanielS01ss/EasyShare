import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Profiler, useEffect, useState } from 'react';

import DocumentList from './Components/MainDashboard/DocumentList';
import EmailSentConfirmation from "./Components/Authentication-Components/EmailSentConfirmation";
import ForgotPasswordCard from "./Components/Authentication-Components/ForgotPasswordCard";
import GreetingPage from "./Components/GreetingPage";
import LoginCard from "./Components/Authentication-Components/LoginCard";
import MainDashboardPage from './Components/MainDashboard/MainDashboardPage';
import MainDashboardPannel from "./Components/MainDashboard/MainDashboardPannel";
import MainPage from "./Components/MainPage.js";
import { PrivateRoutes } from './Components/PrivateRoutes/PrivateRoutes';
import ProfilePage from "./Components/ProfilePage";
import React from "react";
import SharedDocumentPage from './Components/SharedDocumentPage';
import SignUp from "./Components/Authentication-Components/SignUp";
import SuccessRegister from "./Components/Authentication-Components/SuccessRegister";
import {User} from "./Components/ClassModels";
import jwt_decode from "jwt-decode";

function App() {

  const GlobalContext = React.createContext();

  let loggedUser;
  const [user, setUser] = useState({});

  const handleSignOut =()=>{
    setUser({});
    document.getElementById("signInWithGoogle").hidden = false;
  }

  ///aici vei face handlingul la logarea cu google 
  /// vei primi un jwt si vei lua mailul , eventual poza si PENTRU CA SA AI UN ID PE BACKEND
  // o sa decodezi jwt-ul pe care-l primesti si o sa iei parametrul sub
  const handleCallbackResponse = (response)=>
  {

    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    loggedUser = new User(userObject.familyName+" "+userObject.given_name,userObject.sub,userObject.email);
    document.getElementById("signInWithGoogle").hidden = true;
  }


  const contextValues = {
    user:loggedUser,
    userData:user,
    jwt:'',
    refreshJwt:''
  }
  

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id:"231967582415-gd49ib3e0agjqa7knoo4o5d876bu779e.apps.googleusercontent.com",
      callback:handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInWithGoogle"),
      {theme:"outline" , size:"large"}
    );

  },[]);

  //no user sign in   /// have user : show log out buttonbutton


  return ( 
    <div className="App">
      <GlobalContext.Provider value={contextValues}>
        <BrowserRouter> 
              <Routes>
                <Route element={<MainPage/>}>
                  <Route path='/' element={<GreetingPage/>} />
                  <Route  path='/login' element={<LoginCard/>}/>
                  <Route  path='/signup' element={<SignUp/>} />
                  <Route  path="/forgot-password" element={<ForgotPasswordCard/>}/>
                  <Route  path='/confirmed-sent-email' element={<EmailSentConfirmation/>}/>
                </Route>
                <Route element={<PrivateRoutes/>}>
                  <Route path='/app' element={<MainDashboardPage/>} >
                      <Route path='/app/main-page' element={<MainDashboardPannel/>} />
                      <Route path='/app/profile-page' element={<ProfilePage/>}/>
                      <Route path='/app/document-list' element={<DocumentList/>} />
                      <Route path='/app/shared' element={<SharedDocumentPage/>} />
                  </Route>
                </Route>
              </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
