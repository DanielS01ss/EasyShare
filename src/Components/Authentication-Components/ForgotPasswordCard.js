import React, {useState} from "react";

import { useNavigate } from "react-router-dom";

const ForgotPasswordCard = ()=>{

    const [isEmailOk, setIsEmailOk] = useState(false);
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

	const checkValidEmail = (e)=>{
	    setIsEmailOk(isValidEmail(e.target.value));
	}

    return(         
	<div class="pt-40 pb-20 flex justify-center items-center h-screen ">
     <div
      class="w-96 bg-white shadow-md border border-gray-200 rounded-lg max-w-xl p-8 sm:p-6 lg:p-10 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="#">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Please insert your email so we can send a reset password link</h3>
          <div>
              <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
              <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(e)=>{checkValidEmail(e)}} placeholder="name@email.com" required=""/>
          </div>
          { isEmailOk ? <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={(e)=>{e.preventDefault(); navigate('/confirmed-sent-email')}}>Send</button> :
							<button type="submit" className="w-full text-white bg-blue-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled >Send</button>
		  }
      </form>
  </div>
</div>
    );
};

export default ForgotPasswordCard;