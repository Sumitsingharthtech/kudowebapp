import React from "react";
import "./Filter.css";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

function Filter({ setFilterOpen }) {
  return (
    <div className="filterBackground">
      <div className="filterContainer">
        <div className="filtertitleCloseBtn">
          <button
            onClick={() => {
              setFilterOpen(false);
            }}
            className="btn_cancle"
          >
            X
          </button>
        </div>
        <div className="title">
          <h5> Multiple Sort </h5>
          <hr />
          <button class="myButton">
            {" "}
            <BsPlusLg className="btn_icon" /> Add Level{" "}
          </button>
          <button class="myButton">
            {" "}
            <FaMinus className="btn_icon" /> Delete Level{" "}
          </button>
        </div>
        <hr />
        <div className="body">
          <table>
            <tr>
              <th> </th>

              <th> Column</th>
              <th> Order</th>
            </tr>

            <tr>
              <td> Sort By </td>
              <td>
                <select
                  class="form-select form-select-sm  list_form "
                  aria-label=".form-select-mb example"
                >
                  <option selected> Forks </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                {/* <form action="/action_page.php">
                  <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </form> */}
              </td>
              <td>
                {" "}
                <select
                  class="form-select form-select-sm  list_form "
                  aria-label=".form-select-mb example"
                >
                  <option selected> Descending </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>{" "}
              </td>
            </tr>
            <tr>
              <td> Sort By </td>
              <td>
                {" "}
                <select
                  class="form-select form-select-sm  list_form "
                  aria-label=".form-select-mb example"
                >
                  <option selected> Stargazers </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>{" "}
              </td>
              <td>
                {" "}
                <select
                  class="form-select form-select-sm  list_form "
                  aria-label=".form-select-mb-1 example"
                >
                  <option selected>Descending </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>{" "}
              </td>
            </tr>
          </table>
          <hr />
          {/* <p>
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
          </p> */}
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setFilterOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setFilterOpen(false);
            }}
            id="sortBtn"
          >
            Sort
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
