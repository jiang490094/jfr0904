import React from "react"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"

function MyNavbar(props){
    return(
        <>
        <div className="row">
            <div className="container">
        <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
  </div>
        </div>
        </>
    )
}

export default MyNavbar