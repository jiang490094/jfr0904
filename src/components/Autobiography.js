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

function Autobiography(props) {
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
                  <div className="MyName">
                    <div className="CNName">自傳Autobiography </div>
                  </div>

                  <div className="Intro Intro2 Intro3">
                    資策會前端工程師班第九屆結業。
                    <br />
                    經歷582小時學習前端知識，並擔任組長一職。
                    <br />
                    社會新鮮人階段，從事行銷並在3個月內降底 CPA 50%。
                    <br />
                    學生時期在青春設計節獲得前10名。 <br />
                    Code can do everything, I can do anything.
                    這是我對程式碼的認知，也是我對自己的期許
                    <br />
                    <div className="NavMargin"></div>
                    判斷力與執行力
                    <br />
                    在大專時有幸被組員信任，被推舉為組長。在判斷每個
                    階段的應做事項、哪些觀念與流程較難學習後，將事項
                    分割成小塊，讓組員認領，並撰寫redux教學流程，讓
                    大家快速學習。 <br />
                    <div className="NavMargin"></div>
                    時間控管
                    <br />
                    課程從一開始的HTML到最後的react.js，一步步變難而
                    大專也接踵而至。在設計、組員師長溝通、大專撰寫、
                    複習課程、企畫書撰寫、PPT製作一併出現時，如何安排
                    時間就顯得尤其重要了。 <br />
                    <div className="NavMargin"></div>
                    抗壓性
                    <br />
                    從行銷轉職到前端工程師是一個截然不同的挑戰。課表上
                    一個個全然陌生的知識,更讓人望之生懼。
                    在最終即將發表大專的前5天，我的D槽壞了。面對突然其來的狀況，除了修理電腦，努力安撫自己的情緒，也讓我加深認知平時要做好
                    Github 備份的重要性。
                    <br />
                    <br />
                    我擁有設計系的細膩;行銷廣告的觀察;前端工程的邏輯。
                    <br />
                    我始終相信,過程,造就必然。
                    <br />
                    在這5個月我快速成長，學習了所有關於前端的知識，不論是CSS切版、JavaScript
                    動態效果、甚至前端框架React.js的應用，現在已經是一個可以獨立寫出網頁的前端工程師。
                  </div>

                  <div className="AboutBTN">
                    <Button
                      className="AboutBTN1"
                      variant="outline-warning"
                      onClick={() => {
                        props.history.push("/jfr0904/Resume");
                      }}
                    >
                      上一頁
                    </Button>{" "}
                    <Button
                      className="AboutBTN1"
                      variant="outline-success"
                      onClick={() => {
                        props.history.push("/jfr0904/AutobiographyEN");
                      }}
                    >
                      EN Autobiography
                    </Button>{" "}
                    <Button
                      className="AboutBTN1"
                      variant="outline-warning"
                      onClick={() => {
                        props.history.push("/jfr0904/Contact");
                      }}
                    >
                      聯繫我
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

export default withRouter(Autobiography);
