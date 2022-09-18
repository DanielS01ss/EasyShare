import NotFoundWallpaper from "../../Media/not-found.jpg"
import React from "react";

export const NotFound = ()=>{

    return(
    <div className="flex flex-row justify-center">
        <img src={NotFoundWallpaper} className="text-center h-screen"/>
     </div>   
    )
};

