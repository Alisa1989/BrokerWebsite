import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {Navbar as Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownItem, DropdownToggle, Collapse, DropdownMenu, NavbarText} from "reactstrap";

const Navbar = () => {
  return (
  <Nav
    id="navigation"
    color="primary"
    dark
    expand="md"
    fixed="top"
  >
    <NavbarBrand href="/">
      Jon Smith Broker
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <Link to="/" >
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/Buy">
            Buy
          </Link>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Geography
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Sacramento County
            </DropdownItem>
            <DropdownItem>
              Placer County
            </DropdownItem>
            <DropdownItem>
              El Dorado County
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Phone: &nbsp; 
      </NavbarText>
      <a className="call-link" href="tel:5890000111">589-0000111</a>
    </Collapse>
  </Nav>
  );
};

export default Navbar;
