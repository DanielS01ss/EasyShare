import {Navigate, Outlet} from "react-router-dom";

import React from "react";

export const PrivateRoutes = ()=>{

    const isAuthenticated = true;

    return(
        isAuthenticated? <Outlet/> : <Navigate to='/login'/>
    )

};