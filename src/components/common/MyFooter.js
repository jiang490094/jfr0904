import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function MyFooter(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="Footer">
            <h4>Let's talk</h4>
            <p>
              想跟我聊更多關於前端或是專案嗎？
              <br /> 請隨時通過電子郵件與我聯繫{" "}
              <a href="mailto:jfr08100810@gmail.com">jfr08100810@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyFooter;
