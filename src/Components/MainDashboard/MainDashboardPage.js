import "../../Styles/MainPageStyle.css"

import { faDoorOpen, faUser } from '@fortawesome/free-solid-svg-icons'

import DocumentList from "./DocumentList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MainDashboardPannel from "./MainDashboardPannel";
import { Outlet } from "react-router-dom";
import ProfilePage from "../ProfilePage";
import React from "react";
import { useNavigate } from "react-router-dom";

const MainDashboardPage = ()=>{

    const navigate = useNavigate();

    return(
        <div className="main-page-dashboard-container overlay   ">
             <div className="flex flex-row  pt-10 pb-20 pl-5 pr-5" style={{"position":"relative","float":"left"}}>
                <p className="text-lg text-white font-bold">My account</p>
                <FontAwesomeIcon icon={faUser} className="text-white pl-3 text-3xl"/>
            </div>
                <button className="flex rounded flex-row float-right mt-5 mr-5 p-5 text-white  hover:bg-violet-700  hover:outline  hover:outline-1" onClick={()=>{navigate('/')}}>
                    <span className="pr-4 text-xl">Logout</span>
                    <FontAwesomeIcon icon={faDoorOpen} className="float-right  text-2xl  "/>
                </button>
        <Outlet/>
      
   </div>
    )
};

export default MainDashboardPage;