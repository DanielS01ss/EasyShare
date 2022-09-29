import React from "react";
import PPTLogo from "../../Media/ppt-logo.png";
import WordLogo from "../../Media/word-logo.png";
import ExcelLogo from "../../Media/excel-logo.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  faArrowLeft,
  faShareNodes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setSearchQuery }) => (
  <form>
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

export const ManageLinks = () => {
  return (
    <div className="pt-40 max-w-[1000px] mx-auto pb-20">
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-4xl">
          <Link to="/app/main-page">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className=" float-left pl-4 pb-5 text-3xl"
            />
          </Link>
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Manage Links
          </h5>

          <div className="px-6 pt-2 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Links: 0
            </span>
          </div>
          <SearchBar className="mt-10 " />
          <div className="mt-10 h-[600px] overflow-y-scroll">
            {/* --->  This is a document link component <---- */}

            <div className="p-20 w-full">
              <div className="flex flex-row justify-around flex-wrap">
                <img src={PPTLogo} className="w-[150px]" />
                <h1 className="pt-10 font-bold">Name of the document</h1>
              </div>
              <div className="px-10 pt-2 pb-2">
                <span className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  Size of document: 0 MB
                </span>
              </div>
              <Button variant="contained" color="error">
                <FontAwesomeIcon icon={faTrash} className=" text-lg" />
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#a73bdc", marginLeft: "10px" }}
              >
                <FontAwesomeIcon icon={faShareNodes} className="text-lg" />
              </Button>
            </div>
            {/* --->  End of document link component <---- */}
          </div>
        </div>
      </div>
    </div>
  );
};
