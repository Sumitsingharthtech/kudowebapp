import React, { useState } from "react";
import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { AiOutlinePrinter } from "react-icons/ai";
import { AiFillDownSquare } from "react-icons/ai";
import { FaSort } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Modal from "./Modal";
import Filter from "./Filter";

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div>
      <div class="headind ">
        <h4>Autoresponder List</h4>
        <div className="custom-control custom-switch   headind_toggle">
          <input type="checkbox" class="custom-control-input" id="first" />
          <label class="custom-control-label" for="first"></label>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <FaFileImport style={{ fontSize: "25px" }} />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <FaFileExport style={{ fontSize: "25px" }} />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <BiImport style={{ fontSize: "25px" }} />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <AiOutlinePrinter style={{ fontSize: "25px" }} />
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <AiFillDownSquare className="btn_icon" />
            </button>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                setFilterOpen(true);
              }}
            >
              <FaSort className="btn_icon" />
            </button>
            {filterOpen && <Filter setFilterOpen={setFilterOpen} />}
            <button type="button" class="btn btn-secondary">
              <AiFillEye className="btn_icon" style={{ fontSize: "20px" }} />
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
