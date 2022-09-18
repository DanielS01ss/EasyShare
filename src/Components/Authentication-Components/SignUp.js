import 'react-toastify/dist/ReactToastify.css';

import {Link, useNavigate} from "react-router-dom"
import React,{useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';

import {isPasswordStrongCheck} from "../../utils/isPasswordStrongCheck";
import { isValidEmail } from "../../utils/isValidEmail";

const SignUp = ()=>{

    useEffect(()=>{
        
    },[])
    const notify = () => {
        toast.error("Something went wrong while signing up! Please try again later!", {
            position: toast.POSITION.TOP_RIGHT
          });
    
    }

    const [username,setUsername] = useState("");
    const [firstEnteredUsername , setFirstEnteredUsername] = useState(true);
    const [email,setEmail] = useState("");
    const [firstEnteredEmail,setFirstEnteredEmail] = useState(true);
    const [emailValid,setEmailValid] = useState(true);
    const [password,setPassword] = useState("");
    const [firstEnteredPassword,setFirstEnteredPassword] = useState(true);
    const [confirmPassword,setConfirmPassword] = useState("");
    const [isPasswordStrong,setIsPasswordStrong] = useState(false);
    const [firstEnteredConfirmPassword,setFirstEnteredConfirmPassword] = useState(true);
    const [arePasswordMatching,setArePasswordsMatching] = useState(false);
    const [isFirstInput,setIsFirstInput] = useState(true);
    const isFormOk = !isFirstInput && username.length !== 0 && emailValid && password.length!==0 && confirmPassword.length!==0 && arePasswordMatching && isPasswordStrong;

        const checkMatchingPassword =  () =>{
        setArePasswordsMatching(password === confirmPassword);
    }

    useEffect(()=>{
        checkMatchingPassword();
    },[password,confirmPassword])
 

    const handleChangeUsername = (text)=>{
        setUsername(text);
        setFirstEnteredUsername(false);
        setIsFirstInput(false);
    }

    const handleChangeEmail = (text)=>{
        setEmail(text);
        setFirstEnteredEmail(false);
        setEmailValid(isValidEmail(text));
        setIsFirstInput(false);
    }

    const handleChangePassword = (text)=>{
        setPassword(text);
        setIsPasswordStrong(isPasswordStrongCheck(text));
        setFirstEnteredPassword(false);
        setIsFirstInput(false);
    }

    const handleChangeConfirmPassword = (text) =>{
        setConfirmPassword(text);
        setFirstEnteredConfirmPassword(false);
        setIsFirstInput(false);
    }

    return(
        <div className="pt-96 pb-96 flex justify-center items-center h-screen ">
            <ToastContainer/>
        <div
            className="w-96 bg-white shadow-md border border-gray-200 rounded-lg max-w-xl p-8 sm:p-6 lg:p-10 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h3>
                <div>
                    <label for="username" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your username</label>
                    <input type="username" onChange={(e)=>{handleChangeUsername(e.target.value)}} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required=""/>
                    {!firstEnteredUsername && username.length === 0 && <p className="text-red-600">Username should not be empty!</p> }
                </div>
                <div>
                    <label for="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                    <input type="email" onChange={(e)=>{handleChangeEmail(e.target.value)}} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                    {!firstEnteredEmail && !emailValid && <p className="text-red-600">Email address is not valid!</p>}
                </div>
                    <div>
                        <label for="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                        <input type="password" onChange={(e)=>{handleChangePassword(e.target.value)}} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                        {!firstEnteredPassword && !isPasswordStrong && <p className="text-red-600 text-sm">Password should length should be at least 8 ,should contain at least one capital letter and one small letter  and also should contain special characters eg:*!@$# and numbers</p>}
                    </div>
                    <div>
                        <label for="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Repeat password</label>
                        <input type="password" onChange={(e)=>{handleChangeConfirmPassword(e.target.value)}} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                       {!firstEnteredConfirmPassword && !arePasswordMatching && <p className="text-red-600">Passwords do not match!</p> }
                    </div>

                        <div className="flex items-start">
                            <div className="flex items-start">
                                </div>
                            </div>
                            { isFormOk ? <button type="submit" onClick={(e)=>{e.preventDefault(); notify()}} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up </button>:
                            <button type="submit" className="w-full text-white bg-blue-400  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={true}>Sign Up </button> }
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                    </div>
            </form>
        </div>
    
    
    </div>
    );
 
};

export default SignUp;