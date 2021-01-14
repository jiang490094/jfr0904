import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function OpeningPage(props) {
  const [whichSVG, setWhichSVG] = useState(4);

  const changeToSvg1 = () => {
    setWhichSVG(1);
  };
  const changeToSvg2 = () => {
    setWhichSVG(2);
  };
  const changeToSvg3 = () => {
    setWhichSVG(3);
  };
  const changeToSvg4 = () => {
    setWhichSVG(4);
  };

  const [svg4, setSvg4] = useState(
    <div className="TalkBox animate__animated animate__fadeIn">
      拜託點我QQ...
    </div>
  );
  const [svg1, setSvg1] = useState(
    <div className="TalkBox2 animate__animated animate__fadeIn">
      <p>
        Hi~ 我是一隻前端倉鼠，
        <br />
        在當前端工程師前的名字是Leona，
        <br />
        在LINE TAXI當過行銷人員。
        <br />
        你願意聽聽我從行銷人種變成
        <br />
        前端倉鼠的故事嗎？
        <br />
      </p>
      <div className="BtnsP1">
        <Button variant="outline-danger" onClick={changeToSvg2}>
          不願意
        </Button>{" "}
        <Button
          variant="outline-success"
          onClick={() => {
            props.history.push("/jfr0904/AboutMe");
          }}
        >
          願意
        </Button>{" "}
      </div>
    </div>
  );
  const [svg2, setSvg2] = useState(
    <div className="TalkBox2">
      <p>不要這樣啦QQ~~看一下~看一下啦~</p>
      <div className="BtnsP1">
        <Button variant="outline-danger" onClick={changeToSvg3}>
          不願意
        </Button>{" "}
        <Button
          variant="outline-success"
          onClick={() => {
            props.history.push("/jfr0904/AboutMe");
          }}
        >
          願意
        </Button>{" "}
      </div>
    </div>
  );
  const [svg3, setSvg3] = useState(
    <div className="TalkBox2">
      <p>不管你的意願~永遠Yes or Yes~</p>
      <div className="BtnsP1">
        <Button
          variant="outline-success"
          onClick={() => {
            props.history.push("/jfr0904/AboutMe");
          }}
        >
          願意
        </Button>{" "}
        <Button
          variant="outline-success"
          onClick={() => {
            props.history.push("/jfr0904/AboutMe");
          }}
        >
          願意
        </Button>{" "}
      </div>
    </div>
  );

  return (
    <>
      <div className="OpeningPage">
        <img src="./2513419.jpg" alt="背景" className="BccP1" />

        <button className="DisappearingButton" onClick={() => setWhichSVG(1)}>
          <img
            src="./jfr0904/mouse.png"
            alt="主角倉鼠"
            className="MouseP1 animate__bounceInDown animate__animated"
          />
          <img
            src="./jfr0904/giphy2.gif"
            alt="點我"
            className="ClickP1 animate__animated animate__fadeIn"
            show={false}
          ></img>
        </button>

        {whichSVG === 1 ? svg1 : ""}
        {whichSVG === 2 ? svg2 : ""}
        {whichSVG === 3 ? svg3 : ""}
        {whichSVG === 4 ? svg4 : ""}
        {/* {show ? (
          <div className="TalkBox2 animate__animated animate__fadeIn">
            <p>
              Hi~ 我是一隻前端倉鼠，
              <br />
              在當前端工程師前的名字是Leona，
              <br />
              在LINE TAXI當過行銷人員。
              <br />
              你願意聽聽我從行銷人種變成
              <br />
              前端倉鼠的故事嗎？
              <br />
            </p>
            <div className="BtnsP1">
              <Button
                variant="outline-danger"
                onClick={() => {
                  document.querySelector(".TalkBox2>p").innerHTML =
                    "不要這樣嘛QQ~看一下~看一下啦~";
                }}
              >
                不願意
              </Button>{" "}
              <Button
                variant="outline-success"
                onClick={() => {
                  props.history.push("/AboutMe");
                }}
              >
                願意
              </Button>{" "}
            </div>
          </div>
        ) : (
          <div className="TalkBox animate__animated animate__fadeIn">
            拜託點我QQ...
          </div>
        )} */}
      </div>
    </>
  );
}

export default withRouter(OpeningPage);
