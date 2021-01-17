import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MyNavbar from "./common/MyNavbar";
import MyFooter from "./common/MyFooter";
import TalkBox from "./common/TalkBox";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Contact(props) {
  return (
    <>
      <div className="WebBack">
        <MyNavbar />
        <main>
          <div className="container ">
            <div className="row">
              <div className="NavMargin"></div>
              <div className="AboutMySelf AboutMySelf2">
                <div className="MyPic"></div>
                <div className="MyDescription">
                  <h2 className="Title">Front-end Engineer</h2>
                  <div className="MyName">
                    <div className="CNName">名稱：江芳如 / Leona Jiang</div>
                  </div>

                  <div className="Intro">
                    聯繫方式： <br />
                    <a href="mailto:jfr08100810@gmail.com">
                      jfr08100810@gmail.com
                    </a>
                    <br />
                    <a href="https://github.com/jiang490094" target="_blank">
                      https://github.com/jiang490094
                    </a>
                    <br />
                  </div>
                  <div className="AboutBTN">
                    <Button
                      className="AboutBTN1"
                      variant="outline-warning"
                      onClick={() => {
                        props.history.push("/jfr0904/Portfolio");
                      }}
                    >
                      觀察作品集
                    </Button>{" "}
                    <Button
                      className="AboutBTN1"
                      variant="outline-success"
                      onClick={() => {
                        props.history.push("/jfr0904/Resume");
                      }}
                    >
                      了解履歷
                    </Button>{" "}
                  </div>
                </div>
              </div>
              <div className="NavMargin"></div>
              {/* <div className="NavMargin"></div> */}

            </div>
            <MyFooter />
          </div>
        </main>
      </div>
    </>
  );
}

export default withRouter(Contact);
