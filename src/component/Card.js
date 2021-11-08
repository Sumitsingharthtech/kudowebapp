import React, { useState } from "react";
import "./card.css";
import Display from "./Display";


const Card = () => {
  const [displayOpen, setDisplayOpen] = useState(false);
  return (
    <>
      <div class="container">
        <div class="centermian">
          <div class="innermain">
            <div class=" textmain ">
              <div class="one">
                <div class=" text ">
                  <label class="colr"> Name </label>
                  <hr />
                  <label class="colr"> Keyword </label>
                  <hr />
                </div>

                <div class="d-flex ">
                  <div class="p-2 colr ">Message</div>
                  <div class="p-2 ml-auto  d-flex">
                    <a href="/">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>{" "}
                    </a>
                    <a href="/">
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>{" "}
                    </a>

                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="one"
                        onClick={() => {
                          setDisplayOpen(true);
                        }}
                        
                      />
                      <label class="custom-control-label" for="one"></label>
                    </div>
                    {displayOpen && (
                      <Display setDisplayModal={setDisplayOpen} />
                    )}
                  </div>
                </div>
              </div>
              <div class="one">
                <div class=" text ">
                  <label class="colr"> Name </label>
                  <hr />
                  <label class="colr"> Keyword </label>
                  <hr />
                </div>

                <div class="d-flex ">
                  <div class="p-2 colr ">Message</div>
                  <div class="p-2 ml-auto  d-flex">
                    <a href="/">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>{" "}
                    </a>
                    <a href="/">
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>{" "}
                    </a>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="two"
                      />
                      <label class="custom-control-label" for="two"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="one">
                <div class=" text ">
                  <label class="colr"> Name </label>
                  <hr />
                  <label class="colr"> Keyword </label>
                  <hr />
                </div>

                <div class="d-flex ">
                  <div class="p-2  colr">Message</div>
                  <div class="p-2 ml-auto  d-flex">
                    <a href="/">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                    </a>
                    <a href="/">
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </a>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="three"
                      />
                      <label class="custom-control-label" for="three"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="centermian">
          <div class="innermain">
            <div class=" textmain ">
              <div class="one">
                <div class=" text ">
                  <label class="colr"> Name </label>
                  <hr />
                  <label class="colr"> Keyword </label>
                  <hr />
                </div>

                <div class="d-flex ">
                  <div class="p-2 colr ">Message</div>
                  <div class="p-2 ml-auto  d-flex">
                    <a href="/">
                      <i class="fa fa-trash navpading" aria-hidden="true"></i>
                    </a>
                    <a href="/">
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>
                    </a>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="four"
                      />
                      <label class="custom-control-label" for="four"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="one">
                <div class=" text ">
                  <label class="colr"> Name </label>
                  <hr />
                  <label class="colr"> Keyword </label>
                  <hr />
                </div>

                <div class="d-flex ">
                  <div class="p-2 colr ">Message</div>
                  <div class="p-2 ml-auto  d-flex">
                    <a href="/">
                      {" "}
                      <i
                        class="fa fa-trash navpading"
                        aria-hidden="true"
                      ></i>{" "}
                    </a>
                    <a href="/">
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>{" "}
                    </a>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="five"
                      />
                      <label class="custom-control-label" for="five">
                        {" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="one">
                <div class=" text ">
                  <label class="colr"> Name </label>
                  <hr />
                  <label class="colr"> Keyword </label>
                  <hr />
                </div>

                <div class="d-flex ">
                  <div class="p-2  colr">Message</div>
                  <div class="p-2 ml-auto  d-flex">
                    <a href="/">
                      {" "}
                      <i
                        class="fa fa-trash navpading"
                        aria-hidden="true"
                      ></i>{" "}
                    </a>
                    <a href="/">
                      <i class="fa fa-clone navpading" aria-hidden="true"></i>{" "}
                    </a>
                    <div class="custom-control custom-switch">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="six"
                      />
                      <label class="custom-control-label" for="six">
                        {" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="centermian">
            <div class="innermain">
              <div class=" textmain ">
                <div class="one">
                  <div class=" text ">
                    <label class="colr"> Name </label>
                    <hr />
                    <label class="colr"> Keyword </label>
                    <hr />
                  </div>

                  <div class="d-flex ">
                    <div class="p-2 colr ">Message</div>
                    <div class="p-2 ml-auto  d-flex">
                      <a href="/">
                        {" "}
                        <i
                          class="fa fa-trash navpading"
                          aria-hidden="true"
                        ></i>{" "}
                      </a>
                      <a href="/">
                        <i class="fa fa-clone navpading" aria-hidden="true"></i>{" "}
                      </a>
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="seven"
                        />
                        <label class="custom-control-label" for="seven">
                          {" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="one">
                  <div class=" text ">
                    <label class="colr"> Name </label>
                    <hr />
                    <label class="colr"> Keyword </label>
                    <hr />
                  </div>

                  <div class="d-flex ">
                    <div class="p-2 colr ">Message</div>
                    <div class="p-2 ml-auto  d-flex">
                      <a href="/">
                        {" "}
                        <i
                          class="fa fa-trash navpading"
                          aria-hidden="true"
                        ></i>{" "}
                      </a>
                      <a href="/">
                        <i class="fa fa-clone navpading" aria-hidden="true"></i>{" "}
                      </a>
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="eight"
                        />
                        <label class="custom-control-label" for="eight">
                          {" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="one">
                  <div class=" text ">
                    <label class="colr"> Name </label>
                    <hr />
                    <label class="colr"> Keyword </label>
                    <hr />
                  </div>

                  <div class="d-flex ">
                    <div class="p-2  colr">Message</div>
                    <div class="p-2 ml-auto  d-flex">
                      <a href="/">
                        {" "}
                        <i
                          class="fa fa-trash navpading"
                          aria-hidden="true"
                        ></i>{" "}
                      </a>
                      <a href="/">
                        <i class="fa fa-clone navpading" aria-hidden="true"></i>{" "}
                      </a>
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="nine"
                        />
                        <label class="custom-control-label" for="nine">
                          {" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
