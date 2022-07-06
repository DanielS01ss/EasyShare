import React from "react";
import PPTLogo from "../../Media/ppt-logo.png";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faUpload,faTrash, faShareNodes,faDownload, faArrowLeft} from "@fortawesome/free-solid-svg-icons";


const SearchBar = ({setSearchQuery}) => (

    <form >
      <TextField
        id="search-bar"
        className="text w-[90%]"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Search a document"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );

const DocumentList = () =>{

    return(
          
        <div className="pt-40 max-w-[1000px] mx-auto  " >



            <div className="flex flex-row justify-center ">
                <div className="block p-6 rounded-lg shadow-lg  max-w-4xl" style={{backgroundColor:"rgba(255,255,255,0.7"}}>
                <FontAwesomeIcon icon={faArrowLeft} className=" float-left pl-4 pb-5 text-3xl"/> <p>Back to main page</p>
                    <div className="flex flex-row">
                        <img src={PPTLogo} className="w-[175px]"/>
                        <h1 className="mt-20 text-2xl px-10 "> Power Point Documents </h1>
                    </div>
                    <div className="px-6 pt-2 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Documents uploaded: 0</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Total Size of Documents: 0MB</span>
                    </div>
                    <div className="mb-10">
                        <SearchBar className="mt-10 "/>
                    </div>
                
                <div>
                            <Button variant="contained" color="error"> Delete All <FontAwesomeIcon icon={faX} className="pl-2 text-lg"/> </Button>
                            <Button variant="contained"  style={{backgroundColor: "#A10035",marginLeft:"10px"}}> Upload  <FontAwesomeIcon icon={faUpload} className="pl-2 text-lg"/> </Button>
                </div>
                    

                    <div className="mt-10 h-[600px] overflow-y-scroll">

                        <div className="mt-20">
                            <div className="flex flex-row">
                                <img src={PPTLogo} className="w-[75px]"/>
                                <h1 className="pt-5 font-bold">Name of the document</h1>
                            </div>
                            <div className="px-6 pt-2 pb-2">
                                <span className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Size of document: 0 MB</span>
                            </div>
                            <Button variant="contained" color="error">  <FontAwesomeIcon icon={faTrash} className="pl-2 text-lg"/> </Button>
                            <Button variant="contained"  style={{backgroundColor: "#a73bdc",marginLeft:"10px"}}>  <FontAwesomeIcon icon={faShareNodes} className="pl-2 text-lg"/> </Button>
                            <Button variant="contained"  style={{backgroundColor: "#4200b6",marginLeft:"10px"}}>  <FontAwesomeIcon icon={faDownload} className="pl-2 text-lg"/> </Button>
                            
                        </div>
                        
                        <div className="mt-20">
                            <div className="flex flex-row">
                                <img src={PPTLogo} className="w-[75px]"/>
                                <h1 className="pt-5 font-bold">Name of the document</h1>
                            </div>
                            <div className="px-6 pt-2 pb-2">
                                <span className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Size of document: 0 MB</span>
                            </div>
                            <Button variant="contained" color="error">  <FontAwesomeIcon icon={faTrash} className="pl-2 text-lg"/> </Button>
                            <Button variant="contained"  style={{backgroundColor: "#a73bdc",marginLeft:"10px"}}>  <FontAwesomeIcon icon={faShareNodes} className="pl-2 text-lg"/> </Button>
                            <Button variant="contained"  style={{backgroundColor: "#4200b6",marginLeft:"10px"}}>   <FontAwesomeIcon icon={faDownload} className="pl-2 text-lg"/> </Button>
                            
                        </div>

                        <div className="mt-20">
                            <div className="flex flex-row">
                                <img src={PPTLogo} className="w-[75px]"/>
                                <h1 className="pt-5 font-bold">Name of the document</h1>
                            </div>
                            <div className="px-6 pt-2 pb-2">
                                <span className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Size of document: 0 MB</span>
                            </div>
                            <Button variant="contained" color="error">  <FontAwesomeIcon icon={faTrash} className="pl-2 text-lg"/> </Button>
                            <Button variant="contained"  style={{backgroundColor: "#a73bdc",marginLeft:"10px"}}> <FontAwesomeIcon icon={faShareNodes} className="pl-2 text-lg"/> </Button>
                            <Button variant="contained"  style={{backgroundColor: "#4200b6",marginLeft:"10px"}}>  <FontAwesomeIcon icon={faDownload} className="pl-2 text-lg"/> </Button>
                            
                        </div>
                      


                    </div>
                </div>
            </div>     
    </div>
    )

};

export default DocumentList;