import  "../Styles/MainPageStyle.css";

import {Outlet} from "react-router-dom";
import React from "react";

const MainPage = ()=>{

    return(
     <div className="main-page-container overlay ">
        <Outlet/>
    </div>
    );

};

export default  MainPage;