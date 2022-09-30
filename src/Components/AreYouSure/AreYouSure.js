import React from "react";
import TrashGif from "../../Media/throwing-to-trash.gif";

export const AreYouSure = (props) => {
  return (
    <div
      id="modalEl"
      tabindex="-1"
      aria-hidden="true"
      style={{ backdropFilter: "blur(20px)" }}
      className="mx-auto w-[100%] h-[100%] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full  "
    >
      <div className="relative p-4 w-full max-w-2xl mx-auto h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
              Are you sure you want to delete all these items?
            </h3>
          </div>
          <div className="flex flex-row justify-center py-5">
            <img src={TrashGif} width={400} />
          </div>
          <div className="flex flex-row justify-around p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Yes{" "}
            </button>
            <button
              type="button"
              className="bg-red-600 text-white  focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg border border-gray-200 text-lg font-medium px-5 py-2.5  focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
