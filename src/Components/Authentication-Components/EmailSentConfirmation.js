import React, {useState} from "react";
import CheckGif from "../../Media/check.gif";

const EmailSentConfirmation = ()=>{


    return(         
	<div className="pt-40 pb-20 flex justify-center items-center h-screen ">
     <div
      className="w-96 bg-white shadow-md border border-gray-200 rounded-lg max-w-xl p-8 sm:p-6 lg:p-10 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-center">
                <img class="w-32 justify-center" src={CheckGif} alt="Sunset in the mountains" />
        </div>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Email was succesfully sent!</h3>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 mt-10 dark:focus:ring-blue-800" >Back to main page</button>
  </div>
</div>
    );
};

export default EmailSentConfirmation;