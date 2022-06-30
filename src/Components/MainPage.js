import React from "react";
import  "../Styles/MainPageStyle.css";
import ExcelLogo from "../Media/excel-logo.png"
import WordLogo from "../Media/word-logo.png"
import PPTLogo from "../Media/ppt-logo.png"
import LoginCard from "./LoginCard";

const MainPage = ()=>{

    return(
     <div className="main-page-container overlay ">
        {/* <div className="pt-40 text-white text-5xl">Share files easily using EasyShare!</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-20 py-4 px-10 rounded">Get started!</button>

        <div className="mt-40 page-bottom-card-deck pb-20">
            <p className="pt-20 font-bold text-white text-3xl">Files we accept for sharing:</p>

        <div className="ml-10 flex flex-row flex-wrap">
        
        <div className="mt-20 ml-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-20 ml-40 mt-10 " src={ExcelLogo} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXCEL</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Excel is used for creating tables and also create functions within these tables.</p>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Share!
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>       
            
            <div className="mt-20 ml-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-20 ml-40 mt-10 " src={WordLogo} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Word</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Excel is used for creating tables and also create functions within these tables.</p>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Share!
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>    

            <div className="mt-20 ml-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-20 ml-40 mt-10 " src={PPTLogo} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PowerPoint</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Excel is used for creating tables and also create functions within these tables.</p>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Share!
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div> 


        </div>        
        
        </div> */}
        <LoginCard className="pt-40px"/>
    </div>
    );

};

export default  MainPage;