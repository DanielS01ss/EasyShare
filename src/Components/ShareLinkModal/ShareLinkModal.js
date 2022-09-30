import React from "react";
import PPTLogo from "../../Media/ppt-logo.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ShareLinkModal = (props) => {
  const navigate = useNavigate();
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
          <Link
            onClick={(e) => {
              e.preventDefault();
              props.closeModal();
            }}
            to="/"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className=" float-left pl-6 pb-5 pt-5 text-3xl"
            />
          </Link>
          <h3 className="text-xl font-semibold text-gray-900 pt-5 lg:text-2xl dark:text-white">
            Share Link
          </h3>
          <div className="flex p-5 rounded-t border-b dark:border-gray-600">
            <div className="flex pt-10 flex-row  flex-wrap">
              <img src={PPTLogo} className="w-[150px]" />
              <h1 className="pt-10 font-bold">Name of the document</h1>
              <div className=" pt-2 pb-2 w-full">
                <span className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  Size of document: 0 MB
                </span>
              </div>
              <div className="flex flex-row w-full justify-center">
                <span className="text-3xl mr-5">Link:</span>
                <input
                  type="text"
                  className="border-b-4 border-blue-400 w-3/4"
                  value={"https://www.facebook.com/"}
                />
              </div>
            </div>
          </div>
          <div className="pb-5">
            <Button
              variant="contained"
              onClick={() => {
                navigate("/app/manage-links");
              }}
              style={{
                marginBottom: 10,
              }}
            >
              Copy Link <FontAwesomeIcon icon={faLink} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
