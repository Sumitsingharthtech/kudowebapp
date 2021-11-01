import React from "react";
import "./table.css";

const Table = () => {


  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">ID</th>
                  <th scope="col"> Name</th>
                  <th scope="col">Message</th>
                  <th scope="col"> Alert Number</th>
                  <th scope="col">Alert Message </th>
                  <th scope="col">Alert </th>
                  <th scope="col"> Created </th>
                  <th scope="col"> Modified </th>
                  <th scope="col"> Created by </th>

                  <th scope="col"> ON </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck1"
                        checked
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck1"
                      ></label>
                    </div>
                  </td>
                  <td> 20</td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt1"
                      />
                      <label class="custom-control-label" for="alt1"></label>
                    </div>
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn1"
                      />
                      <label class="custom-control-label" for="btn1"></label>
                    </div>{" "}
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck2"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck2"
                      ></label>
                    </div>
                  </td>
                  <td> 43</td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt2"
                      />
                      <label class="custom-control-label" for="alt2"></label>
                    </div>{" "}
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn2"
                      />
                      <label class="custom-control-label" for="btn2"></label>
                    </div>{" "}
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck3"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck3"
                      ></label>
                    </div>
                  </td>
                  <td> 12</td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt3"
                      />
                      <label class="custom-control-label" for="alt3"></label>
                    </div>
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn3"
                      />
                      <label class="custom-control-label" for="btn3"></label>
                    </div>{" "}
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck4"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck4"
                      ></label>
                    </div>
                  </td>
                  <td> 49 </td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt4"
                      />
                      <label class="custom-control-label" for="alt4"></label>
                    </div>{" "}
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn4"
                      />
                      <label class="custom-control-label" for="btn4"></label>
                    </div>{" "}
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck5"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck5"
                      ></label>
                    </div>
                  </td>
                  <td> 34</td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt5"
                      />
                      <label class="custom-control-label" for="alt5"></label>
                    </div>{" "}
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn5"
                      />
                      <label class="custom-control-label" for="btn5"></label>
                    </div>{" "}
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck6"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck6"
                      ></label>
                    </div>
                  </td>
                  <td> 56</td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt6"
                      />
                      <label class="custom-control-label" for="alt6"></label>
                    </div>{" "}
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn6"
                      />
                      <label class="custom-control-label" for="btn6"></label>
                    </div>
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck7"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck7"
                      ></label>
                    </div>
                  </td>
                  <td> 34</td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt7"
                      />
                      <label class="custom-control-label" for="alt7"></label>
                    </div>{" "}
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn7"
                      />
                      <label class="custom-control-label" for="btn7"></label>
                    </div>{" "}
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck8"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck8"
                      ></label>
                    </div>
                  </td>
                  <td> 34</td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt8"
                      />
                      <label class="custom-control-label" for="alt8"></label>
                    </div>{" "}
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn8"
                      />
                      <label class="custom-control-label" for="btn8"></label>
                    </div>{" "}
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck9"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck9"
                      ></label>
                    </div>
                  </td>
                  <td> 32</td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt9"
                      />
                      <label class="custom-control-label" for="alt9"></label>
                    </div>{" "}
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn9"
                      />
                      <label class="custom-control-label" for="btn9"></label>
                    </div>{" "}
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck10"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck10"
                      ></label>
                    </div>
                  </td>
                  <td> 23</td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt10"
                      />
                      <label class="custom-control-label" for="alt10"></label>
                    </div>{" "}
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn11"
                      />
                      <label class="custom-control-label" for="btn11"></label>
                    </div>{" "}
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck11"
                      />
                      <label
                        class="custom-control-label"
                        for="customCheck11"
                      ></label>
                    </div>
                  </td>
                  <td> 43</td>
                  <td> Kudo Autoresponder</td>
                  <td> Kudo</td>
                  <td>9000000001</td>
                  <td> This message </td>
                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="alt11"
                      />
                      <label class="custom-control-label" for="alt11"></label>
                    </div>{" "}
                  </td>
                  <td>10/03/1700 </td>
                  <td> 10/04/1800 </td>
                  <td>The Matrix </td>

                  <td>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="btn12"
                      />
                      <label class="custom-control-label" for="btn12"></label>
                    </div>{" "}
                  </td>
                  <td>
                    <div className="table_icons ">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
