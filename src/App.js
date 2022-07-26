import React from "react";
import { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import jwt_decode from "jwt-decode";
import MainPage from "./Components/MainPage.js";
import {User} from "./Components/ClassModels";


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

  //no user sign in button
  /// have user : show log out button

  return ( 
    <div className="App">
      <GlobalContext.Provider value={contextValues}>
          <MainPage/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
