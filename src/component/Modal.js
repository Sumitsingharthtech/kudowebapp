import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      y
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h5> Advanced Research </h5>
        </div>
        <hr />
        <div className="body">
          <p>
            {" "}
            ID <input type="text" placeholder="ID" />
          </p>
          <p>
            {" "}
            Item Name <input type="text" placeholder="Item Name" />
          </p>
          <p>
            {" "}
            Item Price <input type="text" placeholder="Item Price" />
          </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
