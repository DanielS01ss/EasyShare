import CheckGif from "../../Media/check.gif";
import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessRegister = ()=>{

    const navigate = useNavigate();

    return(
        <div className=" pt-40  mx-auto  w-[500px] justify-center items-center h-screen">
             <div class="rounded overflow-hidden shadow-lg bg-white">
            <div className="flex items-center justify-center">
                <img class="w-32 justify-center" src={CheckGif} alt="Sunset in the mountains" />
            </div>
            
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Successfull Register!!</div>
                <p class="text-gray-700 text-base">
                    You registered successfully!
                    Now you can login and explore all our features!
                </p>
            </div>
            <button type="submit" onClick={()=>{ navigate('/login')}} class="w-32 mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </div>
        </div>
    );
};

export default SuccessRegister;