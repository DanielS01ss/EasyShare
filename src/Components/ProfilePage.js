import 'react-toastify/dist/ReactToastify.css';

import {Link, useNavigate} from "react-router-dom"
import React, {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';

import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfilePicStockImg from "../Media/user.png";
import { TextField } from '@mui/material';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { isPasswordStrongCheck } from "../utils/isPasswordStrongCheck";
import { isValidEmail } from "../utils/isValidEmail"

const ProfilePage = ()=>{

    const navigate = useNavigate();
    const notify = () => {
        toast.error("Something went wrong ! Please try again later!", {
            position: toast.POSITION.TOP_RIGHT
          });
    
    }

    const [emailValue,setEmailValue] = useState("");
    const [isValidEmailInput,setIsValidEmailInput] = useState(false);
    const [isFirstEmailInput, setIsFirstEmailInput] = useState(true);
    const [username,setUsername] = useState("");
    const [isFirstUsernameInput,setIsFirstUsernameInput] = useState(true);
    const [isFirstConfirmPasswordInput,setisFirstConfirmPasswordInput] = useState(true);
    const [confirmPassword,setConfirmPassword] = useState("");
    const [password,setPassword] = useState("");
    const [isFirstPasswordInput,setIsFirstPasswordInput] = useState(true);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [isPasswordStrong,setIsPasswordStrong] = useState(false);

    useEffect(()=>{
        setPasswordsMatch(password === confirmPassword);
    },[password,confirmPassword])

    const handleChangeEmail = (text)=>{
        setEmailValue(text);
        setIsFirstEmailInput(false);
        setIsValidEmailInput(isValidEmail(text));
    }

    const handleChangeUsername = (text) =>{
        setUsername(text);
        setIsFirstUsernameInput(false);
    }

    const handleChangePassword = (text)=>{
        setIsFirstPasswordInput(false);
        setPassword(text);
        setIsPasswordStrong(isPasswordStrongCheck(text));
    }

    const handleChangeConfirmPassword =(text) =>{
        setConfirmPassword(text);
        setisFirstConfirmPasswordInput(false);
    }

    return(
     <div className="pt-40 max-w-[600px] mx-auto pb-20">
        <ToastContainer/>
        <div class="flex justify-center ">
            <div>
            
            </div>
            <div class="block p-8 rounded-lg shadow-lg bg-white max-w-4xl">
            <div className="flex flex-row">
                <FontAwesomeIcon icon={faArrowLeft} className=" pl-4 text-3xl hover:cursor-pointer" onClick={()=>{navigate(-1)}} />
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 ml-[30%]">My account</h5>
            </div>
            
            <div className=" flex  flex-row  pt-5 px-40">
                <img src={ProfilePicStockImg} className="w-[55px]"/>
                <div className="flex flex-col pl-5">
                    <p className="w-100 text-lg">Name</p>
                    <p className="w-100 text-lg">Email address</p>
                </div>
            </div>

        <div className="text-left pt-20">
            <p className="text-xl mb-5 font-bold">
                Change username
            </p>

            <TextField
            className="w-[100%] mt-2 pb-5"
            id="demo-helper-text-misaligned"
            label="Username"
            onChange={(ev)=>{handleChangeUsername(ev.target.value)}}
            />
            <div>

            </div>
           {!isFirstUsernameInput && username.length === 0 && <p className="text-red-600 text-center">Username can not be empty!</p> }
            <div className="pt-3">
                <Button disabled={ username.length === 0} onClick={()=>{notify();}} variant="contained" className="pt-5  w-[100%]">Submit</Button>
            </div>
        
        </div>

        <div className="text-left pt-10">
            <p className="text-xl mb-5 font-bold">
                Change email
            </p>

            <TextField
            className="w-[100%] mt-5 pb-5"
            helperText="ex: john_doe@gmail.com"
            id="demo-helper-text-misaligned"
            label="Email"
            onChange={(ev)=>{handleChangeEmail(ev.target.value)}}
            />
           {!isFirstEmailInput && !isValidEmailInput  && <p className="text-red-600 pb-5 text-center">Email is not valid!</p> }
            <Button variant="contained" disabled={!isValidEmailInput}  onClick={()=>{notify();}}  className="pt-5  w-[100%]">Submit</Button>

        </div>
        
        <div className=" text-left pt-5 flex flex-col">

                <p className="text-xl mb-5 font-bold">
                        Change password
                    </p>
                    <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange = {(ev)=>{handleChangePassword(ev.target.value)}}
                    />
        {!isFirstPasswordInput && !isPasswordStrong  && <p className="text-red-600 text-sm">Password should length should be at least 8 ,should contain at least one capital letter and one small letter  and also should contain special characters eg:*!@$# and numbers</p>}
                <div className="pt-5 pb-5 w-[100%]">
                    <TextField
                    className="w-[100%]"
                    id="outlined-password-input"
                    label="Confirm password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(ev)=>{handleChangeConfirmPassword(ev.target.value)}}
                    /> 
                </div>
        {!isFirstConfirmPasswordInput && !passwordsMatch && <p className="text-red-600 text-sm">Passwords don't match</p> }
            <Button variant="contained" disabled={!passwordsMatch || password.length ===0 }  onClick={()=>{notify();}}  className="pt-20">Submit</Button>

        </div>

         <div className="mt-20">
         <Button variant="contained" color="error"  onClick={()=>{notify();}} > Delete account</Button>
         </div>
    

        </div>
        
    </div>
</div>
    );
};

export default ProfilePage;