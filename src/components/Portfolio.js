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

function Portfolio(props) {
  return (
    <>
      <div className="WebBack">
        <MyNavbar />
        <main>
          <div className="container ">
            <div className="row">
              <div className="NavMargin"></div>
              {/* <div className="WorkTitle">
                <h2>作品欄</h2>
              </div> */}

              <div className="Portfolio">
                <div className="WorksDescription col-lg-5 col-md-5">
                  <div className="WorksTitle">個人網站</div>
                  <div className="WorksDetail">討伐時長：4天</div>
                  <div className="WorksDetail">
                    任務概述：
                    <br />
                    使用github pages上架react個人網站。
                  </div>
                  <div className="WorksDetail">
                    使用技術：
                    <br />
                    React、HTML5、SCSS、 React Bootstrap
                  </div>
                </div>
                <div className="Block  col-lg-6 col-md-6 ">
                  <img
                    alt="個人網站"
                    src="/jfr0904/MyWeb.jpg"
                    className="WorksPic"
                  ></img>
                  <div className="PortfolioBTN1">
                    <Button
                      variant="outline-success"
                      href="https:/github.com/jiang490094/jfr0904"
                      target="_blank"
                    >
                      查看Demo
                    </Button>{" "}
                  </div>
                </div>
              </div>

              <div className="Portfolio">
                <div className="WorksDescription col-lg-5 col-md-5">
                  <div className="WorksTitle">StrayMao 寵愛有家(商城)</div>
                  <div className="WorksDetail">討伐時長：1 個月</div>
                  <div className="WorksDetail">
                    任務概述：
                    <br />
                    結合了商城、領養、社群功能的領養網站，
                    完善現今領養網站的短處。
                  </div>
                  <div className="WorksDetail">
                    使用技術：
                    <br />
                    React、XD、HTML、SCSS、Bootstrap、MySQL、 Node.
                    js、Redux、Google Login API、react-share
                  </div>
                  <div className="WorksDetail">
                    使用工具：
                    <br />
                    VScode、GitHub 、 npm / yarn
                  </div>
                </div>
                <div className="Block  col-lg-6 col-md-6 ">
                  <img
                    alt="寵愛有家"
                    src="/jfr0904/StrayMao.jpg"
                    className="WorksPic"
                  ></img>
                  <div className="PortfolioBTN1">
                    <Button
                      variant="outline-success"
                      href="https://github.com/jiang490094/StrayMao-Front-end"
                      target="_blank"
                    >
                      查看Demo
                    </Button>{" "}
                  </div>
                </div>
              </div>

              <div className="Portfolio">
                <div className="WorksDescription col-lg-5 col-md-5">
                  <div className="WorksTitle">Catch me if you can ! (JQ)</div>
                  <div className="WorksDetail">討伐時長：2天</div>
                  <div className="WorksDetail">
                    任務概述：
                    <br />
                    以小精靈為概念做出的 鬼抓人遊戲。
                  </div>
                  <div className="WorksDetail">
                    使用技術：
                    <br />
                    React、HTML5、SCSS、 React Bootstrap
                  </div>
                </div>
                <div className="Block  col-lg-6 col-md-6 ">
                  <img
                    alt="小遊戲"
                    src="/jfr0904/Catch me if you can.jpg"
                    className="WorksPic"
                  ></img>
                  <div className="PortfolioBTN1">
                    <Button
                      variant="outline-success"
                      href="https://jiang490094.github.io/jfr0904/Portfolio/Catch/index.html"
                      target="_blank"
                    >
                      查看Demo
                    </Button>{" "}
                  </div>
                </div>
              </div>

              <div className="Portfolio">
                <div className="WorksDescription col-lg-5 col-md-5">
                  <div className="WorksTitle">汪喵星球 (Bootstrap)</div>
                  <div className="WorksDetail">討伐時長：3天</div>
                  <div className="WorksDetail">
                    任務概述：
                    <br />
                    復刻電商網站，並使用RWD技術
                  </div>
                  <div className="WorksDetail">
                    使用技術：
                    <br />
                    Bootstrap、 HTML、CSS
                  </div>
                </div>
                <div className="Block  col-lg-6 col-md-6 ">
                  <img
                    alt="復刻電商"
                    src="/jfr0904/汪喵星球.jpg"
                    className="WorksPic"
                  ></img>
                  <div className="PortfolioBTN1">
                    <Button
                      variant="outline-success"
                      href="https://jiang490094.github.io/jfr0904/Portfolio/DogCatStar/index.html"
                      target="_blank"
                    >
                      查看Demo
                    </Button>{" "}
                  </div>
                </div>
              </div>

              <div className="WorkBTN">
                <Button
                  className="AboutBTN1"
                  variant="warning"
                  onClick={() => {
                    props.history.push("/jfr0904/Resume");
                  }}
                >
                  前往履歷
                </Button>{" "}
                <Button
                  className="AboutBTN1"
                  variant="primary"
                  onClick={() => {
                    props.history.push("/jfr0904/Contact");
                  }}
                >
                  與我聯繫
                </Button>{" "}
              </div>
            </div>
          </div>
        </main>

        <MyFooter />
      </div>
    </>
  );
}

export default withRouter(Portfolio);
