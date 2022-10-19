import "../../Styles/MainPageStyle.css";

import { faDoorOpen, faUser } from "@fortawesome/free-solid-svg-icons";

import DocumentList from "./DocumentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainDashboardPannel from "./MainDashboardPannel";
import { Outlet } from "react-router-dom";
import ProfilePage from "../ProfilePage";
import { deleteLocalStorageTokens } from "../../utils/localStorage";
import React from "react";
import { useNavigate } from "react-router-dom";

const MainDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page-dashboard-container overlay   ">
      <button
        className="flex flex-row  mt-5 ml-5 p-5 rounded text-white  hover:bg-amber-500  hover:outline  hover:outline-1"
        onClick={() => {
          navigate("/app/profile-page");
        }}
        style={{ position: "relative", float: "left" }}
      >
        <p className="text-lg text-white font-bold">My account</p>
        <FontAwesomeIcon icon={faUser} className="text-white pl-3 text-3xl" />
      </button>
      <button
        className="flex rounded flex-row float-right mt-5 mr-5 p-5 text-white  hover:bg-violet-700  hover:outline  hover:outline-1"
        onClick={() => {
          navigate("/");
          deleteLocalStorageTokens();
        }}
      >
        <span className="pr-4 text-xl">Logout</span>
        <FontAwesomeIcon
          icon={faDoorOpen}
          className="float-right  text-2xl  "
        />
      </button>
      <Outlet />
    </div>
  );
};

export default MainDashboardPage;
