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

function MyNavbar(props) {
  return (
    <>
      <div className="WebBack">
        <Navbar className="Nav0" expand="lg">
          <div className="container Nav1">
            <div className="row">
              <div>
                <img
                  src="./tumblr_per90kGERz1wzvjnmo1_400.gif"
                  alt="動動倉鼠"
                  className="MoveNav"
                />
                <Navbar.Brand href="/jfr0904" style={{ color: "#41416e" }}>
                  Leona Jiang
                </Navbar.Brand>
              </div>

              <div className="Nav">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link
                      as={NavLink}
                      style={{ color: "#41416e" }}
                      to="/jfr0904/AboutMe"
                    >
                      About
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      style={{ color: "#41416e" }}
                      to="/jfr0904/Portfolio"
                    >
                      Portfolio
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "#41416e" }}
                      href="/jfr0904/Resume"
                    >
                      Resume
                    </Nav.Link>
                    <Nav.Link
                      style={{ color: "#41416e" }}
                      href="/jfr0904/Contact"
                    >
                      Contact
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
      <img
        src="./mouse.png"
        alt="主角倉鼠"
        className="MouseBlog animate__bounceInDown animate__animated"
      />
    </>
  );
}

export default MyNavbar;
