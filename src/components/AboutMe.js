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

function AboutMe(props) {
  return (
    <>
      <div className="WebBack">
        <MyNavbar />
        <main>
          <div className="container ">
            <div className="row">
              <div className="NavMargin"></div>
              <div className="AboutMySelf">
                <div className="MyPic"></div>
                <div className="MyDescription">
                  <h2 className="Title">Front-end Engineer</h2>
                  <div className="MyName">
                    <div className="CNName">名稱：江芳如 / Leona Jiang</div>
                  </div>
                  <div className="Intro">
                    出沒條件： <br />
                    廚房、毛絨動物、電腦
                  </div>
                  <div className="Intro">
                    描述： <br />
                    Code can do everything , I can do anything .<br />
                    以前曾在LINE
                    TAXI擔任行銷，後因與工程師相談甚歡被感染coder病毒，突變為前端工程師。在資策會專案中負責全端工程師與
                    PM 與 UI/UX 設計師的角色，從 style guide 設計到
                    React.js框架、Redux使用再到Node.js、MySQL等。
                    除了程式方面，在團隊方面負責排定開發流程與期限、 企劃書、
                    PPT製作等， 並撰寫redux教學文，讓組員快速上手。
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
            </div>
          </div>
        </main>

        <MyFooter />
      </div>
    </>
  );
}

export default withRouter(AboutMe);
