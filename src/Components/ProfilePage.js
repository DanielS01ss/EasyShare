import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfilePicStockImg from "../Media/user.png";
import React from "react";
import { TextField } from '@mui/material';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProfilePage = ()=>{

    return(
       
     <div className="pt-40 max-w-[1000px] mx-auto pb-20">
        <div class="flex justify-center ">
            <div>
            
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-4xl">
            <div className="flex flex-row">
                <FontAwesomeIcon icon={faArrowLeft} className=" pl-4 text-3xl"/>
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
            />
            <div>

            </div>

            <div className="pt-3">
                <Button variant="contained" className="pt-5  w-[100%]">Submit</Button>
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
            />

            <Button variant="contained" className="pt-5  w-[100%]">Submit</Button>

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
                    />
                
                <div className="pt-5 pb-5 w-[100%]">
                    <TextField
                    className="w-[100%]"
                    id="outlined-password-input"
                    label="Confirm password"
                    type="password"
                    autoComplete="current-password"
                    /> 
                </div>
            
            <Button variant="contained" className="pt-20">Submit</Button>

        </div>

         <div className="mt-20">
         <Button variant="contained" color="error"> Delete account</Button>
         </div>
    

        </div>
        
    </div>
</div>
    );
};

export default ProfilePage;