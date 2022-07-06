import React from "react";
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faShareNodes,faDownload} from "@fortawesome/free-solid-svg-icons";
import PPTLogo from "../Media/ppt-logo.png";

const SharedDocumentPage = ()=>{

    return(
        <div className="pt-40 max-w-[1000px] mx-auto " >
                <div className="flex flex-row justify-center ">
                    <div className="block p-6 rounded-lg shadow-lg  max-w-4xl" style={{backgroundColor:"rgba(255,255,255,0.7"}}>
                    <div className="mt-5 px-10">
                            <div className=" flex flex-row">
                                <img src={PPTLogo} className="w-[155px]"/>
                                <div className="flex flex-col px-5 ml-5">
                                    <h1 className="pt-10 font-bold">Name of the document</h1>
                                    <h1 className=" float-left font-bold">Type:PPT</h1>
                                    <h1 className="pt-5 font-bold">Shared by: dasfdsf</h1>
                                    
                                </div>
                            </div>
                            <div className="px-10 pt-2 pb-2">
                                <span className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Size of document: 0 MB</span>
                            </div>
                           
                            <Button variant="contained"  style={{backgroundColor: "#4200b6",marginLeft:"10px" , width:"100%"}}> Download  <FontAwesomeIcon icon={faDownload} className="pl-3 text-lg"/> </Button>
                            
                        </div>
                    </div>
                </div>     
        </div>
    )
};

export default SharedDocumentPage;