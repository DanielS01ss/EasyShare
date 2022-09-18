import LoadingGif from "../Media/loading.gif";
import React from "react";

const Loading = ()=>{

    return(
        <div className="pt-40 pb-20 max-w-[100px] mx-auto  " >
            <div className="flex flex-col justify-center ">
               <img src={LoadingGif}/>
               <p className="text-3xl">Loading...</p>
            </div>     
    </div>
    )
};

export default Loading;