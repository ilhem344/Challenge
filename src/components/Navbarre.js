import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const Navbarre = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ height: "45px" }} color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{ marginRight: "20px" }}>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem style={{ marginRight: "20px" }}>
              <Link to="/aboutus"> About us</Link>
            </NavItem>
          </Nav>
          <NavbarText
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingRight: "25px",
            }}
          >
            Welcome To Drink Search
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarre;
