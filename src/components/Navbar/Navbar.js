import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {Navbar as Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown, DropdownItem, DropdownToggle, Collapse, DropdownMenu, NavbarText} from "reactstrap";

const Navbar = () => {
  return (
  <Nav
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
          <Link to="/">
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
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Nav>
  );
};

export default Navbar;
