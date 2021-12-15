import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "../../images/logo1.jpg"

const Navbar = () => {
  const [geoDropdown, setGeoDropdown] = useState(false);

  const toggleGeoDropdown = () => setGeoDropdown(geoDropdown);

  return (
    <div className="navbar-container">
      <img className="navbar-image" src={logoImage} alt="logo"/>
    <div className="navbar-menu">
        <div className="navbar-navigation">
        <h3>Jon Hesse</h3>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Buy">Buy</Link>
        </li>
        <li>
          <Link to="/Sell">Sell</Link>
        </li>
        <div className="dropdown">
          <button className="button-geo">Areas</button>
          <div className="dropdown-content">
          <a href="/Sell">Placer County</a>
          <a href="/Sell">El Dorado County</a>
          <a href="/Sell">Sacramento County</a>
        </div>
        </div>
        </div> 
      <div className="navbar-links">

    <>
      <span>Phone: &nbsp;</span>
      <a className="contact-link" href="tel:5890000111">
        589-0000111
      </a>
      </>
      <>
      <span>&nbsp; &nbsp; E-mail:  &nbsp;</span>
      <a className="contact-link" href="mailto: abc@example.com">
        abc@example.com
      </a>
      </>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
