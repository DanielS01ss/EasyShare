import { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import jwt_decode from "jwt-decode";
import MainPage from "./Components/MainPage.js";



function App() {


  const [user, setUser] = useState({});

  const handleSignOut =()=>{
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  ///aici vei face handlingul la logarea cu google 
  /// vei primi un jwt si vei lua mailul , eventual poza si PENTRU CA SA AI UN ID PE BACKEND
  // o sa decodezi jwt-ul pe care-l primesti si o sa iei parametrul sub
  const handleCallbackResponse = (response)=>
  {
  
    console.log("Encoded JWT ID token: "+response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }
  

  useEffect(()=>{
    /* global google*/
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
        <MainPage/>

    </div>
  );
}

export default App;
