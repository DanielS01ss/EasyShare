import React from "react";
import "../../Styles/MainPageStyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'
import MainDashboardPannel from "./MainDashboardPannel";
import ProfilePage from "../ProfilePage";

const MainDashboardPage = ()=>{

    return(
        <div className="main-page-dashboard-container overlay">
            {/* <div className="flex flex-row  pt-10 pb-20 pr-5" style={{"position":"relative","float":"right"}}>
                <p className="text-lg text-white font-bold">My account</p>
                <FontAwesomeIcon icon={faUser} className="text-white pl-4 text-3xl"/>
            </div>
        <MainDashboardPannel/> */}
        <ProfilePage/>
   </div>
    )
};

export default MainDashboardPage;