import {
  faArrowLeft,
  faDownload,
  faShareNodes,
  faTrash,
  faUpload,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Button } from "@mui/material";
import ExcelLogo from "../../Media/excel-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { Modal } from "../Modal/Modal.js";
import PPTLogo from "../../Media/ppt-logo.png";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SuccessModal } from "../SuccessModal/SuccessModal";
import TextField from "@mui/material/TextField";
import WordLogo from "../../Media/word-logo.png";
import { ShareLinkModal } from "../ShareLinkModal/ShareLinkModal";

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

const DocumentList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [documentsType, setDocumentsType] = useState();
  const [displaySuccessModal, setDisplaySuccessModal] = useState(false);
  const [displayUploadModal, setDisplayUploadModal] = useState(false);
  const [fileType, setFileType] = useState("ppt");

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log("useEffect:", currentParams);
    if (!currentParams.type) {
      navigate("/not-found");
    }
    if (currentParams.type === "powerpoint") {
      setDocumentsType("powerpoint");
      setFileType("ppt");
    } else if (currentParams.type === "word") {
      setDocumentsType("word");
      setFileType("docx");
    } else if (currentParams.type === "excel") {
      setDocumentsType("excel");
      setFileType("excel");
    } else {
      navigate("/not-found");
    }
  }, []);

  const documentListHeader = () => {
    switch (documentsType) {
      case "powerpoint":
        return (
          <div className="flex flex-row p-20">
            <img src={PPTLogo} className="w-[175px] " />
            <h1 className="mt-20 text-2xl px-10 "> Power Point Documents </h1>
          </div>
        );

      case "word":
        return (
          <div className="flex flex-row p-20">
            <img src={WordLogo} className="w-[175px]" />
            <h1 className="mt-20 text-2xl px-10 "> Word Documents </h1>
          </div>
        );
      case "excel":
        return (
          <div className="flex flex-row p-20">
            <img src={ExcelLogo} className="w-[175px]" />
            <h1 className="mt-20 text-2xl px-10 "> Excel Documents </h1>
          </div>
        );
    }
  };

  const handleUploadDocumentsDisplayModal = () => {
    setDisplayUploadModal(true);
  };

  const [displayShareModal, setDisplayShareModal] = useState(false);

  return (
    <div className="pt-40 pb-20 max-w-[1000px] mx-auto  ">
      {displayShareModal && (
        <ShareLinkModal
          closeModal={() => {
            setDisplayShareModal(false);
          }}
        />
      )}
      {displayUploadModal && (
        <Modal
          fileType={fileType}
          handleOpenSuccessModal={() => {
            setDisplaySuccessModal(true);
            setDisplayUploadModal(false);
          }}
          handleCloseModal={() => {
            setDisplaySuccessModal(false);
            setDisplayUploadModal(false);
          }}
        />
      )}
      {displaySuccessModal && (
        <SuccessModal
          handleUploadAnother={() => {
            setDisplaySuccessModal(false);
            setDisplayUploadModal(true);
          }}
          handleCloseModal={() => {
            setDisplaySuccessModal(false);
            setDisplayUploadModal(false);
          }}
        />
      )}

      <div className="flex flex-row justify-center ">
        <div
          className="block p-6 rounded-lg shadow-lg  max-w-4xl"
          style={{ backgroundColor: "rgba(255,255,255,1.0" }}
        >
          <Link to="/app/main-page">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className=" float-left pl-4 pb-5 text-3xl"
            />{" "}
          </Link>

          {documentListHeader()}
          <div className="mb-10">
            <SearchBar className="mt-10 " />
          </div>
          <div>
            <Button variant="contained" color="error">
              {" "}
              Delete All <FontAwesomeIcon
                icon={faX}
                className="pl-2 text-lg"
              />{" "}
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                handleUploadDocumentsDisplayModal();
              }}
              style={{ backgroundColor: "#A10035", marginLeft: "10px" }}
            >
              {" "}
              Upload{" "}
              <FontAwesomeIcon icon={faUpload} className="pl-2 text-lg" />{" "}
            </Button>
          </div>
          <div className="mt-10 h-[600px] overflow-y-scroll">
            <div className="mt-20">
              <div className="flex flex-row">
                <img src={PPTLogo} className="w-[75px]" />
                <h1 className="pt-5 font-bold">Name of the document</h1>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  Size of document: 0 MB
                </span>
              </div>
              <Button variant="contained" color="error">
                {" "}
                <FontAwesomeIcon icon={faTrash} className=" text-lg" />{" "}
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#a73bdc", marginLeft: "10px" }}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faShareNodes}
                  onClick={() => {
                    setDisplayShareModal(true);
                  }}
                  className="text-lg"
                />{" "}
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#4200b6", marginLeft: "10px" }}
              >
                {" "}
                <FontAwesomeIcon icon={faDownload} className="text-lg" />{" "}
              </Button>
            </div>

            <div className="mt-20">
              <div className="flex flex-row">
                <img src={PPTLogo} className="w-[75px]" />
                <h1 className="pt-5 font-bold">Name of the document</h1>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  Size of document: 0 MB
                </span>
              </div>
              <Button variant="contained" color="error">
                {" "}
                <FontAwesomeIcon icon={faTrash} className="text-lg" />{" "}
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#a73bdc", marginLeft: "10px" }}
              >
                {" "}
                <FontAwesomeIcon icon={faShareNodes} className="text-lg" />{" "}
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#4200b6", marginLeft: "10px" }}
              >
                {" "}
                <FontAwesomeIcon icon={faDownload} className="text-lg" />{" "}
              </Button>
            </div>

            <div className="mt-20">
              <div className="flex flex-row">
                <img src={PPTLogo} className="w-[75px]" />
                <h1 className="pt-5 font-bold">Name of the document</h1>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  Size of document: 0 MB
                </span>
              </div>
              <Button variant="contained" color="error">
                {" "}
                <FontAwesomeIcon icon={faTrash} className="text-lg" />{" "}
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#a73bdc", marginLeft: "10px" }}
              >
                {" "}
                <FontAwesomeIcon icon={faShareNodes} className="text-lg" />{" "}
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#4200b6", marginLeft: "10px" }}
              >
                {" "}
                <FontAwesomeIcon icon={faDownload} className="text-lg" />{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentList;
