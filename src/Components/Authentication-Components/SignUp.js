import React from "react";
import GoogleLogo from "../../Media/google-icon.jpg";

const SignUp = ()=>{

    return(
        <div class="pt-96 pb-96 flex justify-center items-center h-screen ">
        <div
            class="w-96 bg-white shadow-md border border-gray-200 rounded-lg max-w-xl p-8 sm:p-6 lg:p-10 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="#">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h3>
                <div>
                    <label for="username" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your username</label>
                    <input type="username" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                </div>
                <div>
                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                </div>
                    <div>
                        <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                    </div>
                    <div>
                        <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Repeat password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                    </div>

                        <div class="flex items-start">
                            <div class="flex items-start">
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up </button>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex flex-row justify-evenly"><p>Login with Google </p><img className="w-6" src={GoogleLogo} alt="google logo"/></button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Login</a>
                    </div>
            </form>
        </div>
    
    
    </div>
    );

};

export default SignUp;