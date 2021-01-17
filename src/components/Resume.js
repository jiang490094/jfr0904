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

function Resume(props) {
  return (
    <>
      <div className="WebBack">
        <MyNavbar />
        <main>
          <div className="container ">
            <div className="row">
              <div className="NavMargin"></div>
              <div className="AboutMySelf">
                <div className="MyDescriptionR">
                  <h2 className="Title">江芳如 / Leona Jiang</h2>
                  <div className="MyName">
                    <div className="CNName">職業：Front-end Engineer</div>
                  </div>

                  <div className="MyName">
                    <div className="CNName CNName2">技能Skills</div>
                  </div>

                  <div className="Intro Intro2">
                    前端開發： <br />
                    React.js、HTML
                    5、CSS、SCSS、JavaScript(ES6)、jQuery、Bootstrape 4
                  </div>

                  <div className="Intro Intro2">
                    後端開發： <br />
                    Node.js、PHP、MySQL
                  </div>

                  <div className="Intro Intro2">
                    媒體設計： <br />
                    Photoshop、Adobe XD、Adobe illustrator{" "}
                  </div>

                  <div className="Intro Intro2">
                    其他： <br />
                    Git 版本控制、VScode
                  </div>

                  <div className="Intro Intro2">
                    語言： <br />
                    中文 (優良)、英文 (中等)、臺語 (優良)
                  </div>

                  <div className="MyName">
                    <div className="CNName CNName2">
                      冒險經歷Work Experience
                    </div>
                  </div>

                  <h4 className="IntroTitle">Freelancer</h4>
                  <div className="Intro Intro2">
                    SOHO | 2019.11 to present
                    <br />
                    平面設計、廣告投放、社群經營自由接案者
                  </div>

                  <h4 className="IntroTitle">Student</h4>
                  <div className="Intro Intro2">
                    資策會 | 2020.07 to 2020.11
                    <br />
                    於5個月內學習前端所關知識，並用1個月完成專題
                    <br />
                    於專題中擔任組長自我學習，也撰寫redux教學文件幫助組員快速學習
                  </div>

                  <h4 className="IntroTitle">Marketing Specialist</h4>
                  <div className="Intro Intro2">
                    LINE TAXI | 2019.03 to 2019.11
                    <br />
                    入職3月個月內降低 CPA 50%，主要管理廣告部分(FB Ad、SEO、GDN、關鍵字)
                    <br />
                    於公司整併時，接手廣告、記者會、社群、異業洽談等
                  </div>

                  <div className="MyName">
                    <div className="CNName CNName2">教育經歷Education</div>
                  </div>
                  <h4 className="IntroTitle">Shih Chien University</h4>
                  <div className="Intro Intro2">
                    Fashion Styling Design | 2014 - 2018
                    <br />
                    青春設計節 立體造型設計類 10 大入圍
                  </div>

                  <div className="AboutBTN">

                  <Button
                      className="AboutBTN1"
                      variant="outline-warning"
                      onClick={() => {
                        props.history.push("/jfr0904/Contact");
                      }}
                    >
                      聯繫我
                    </Button>{" "}
                   
                    <Button
                      className="AboutBTN1"
                      variant="outline-success"
                      onClick={() => {
                        props.history.push("/jfr0904/Autobiography");
                      }}
                    >
                      查看自傳
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

export default withRouter(Resume);
