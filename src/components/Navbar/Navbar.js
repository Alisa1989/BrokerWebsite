import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import smallImage from "../../images/jhesse.jpg";
import {faPhone, faEnvelope, faBars} from "@fortawesome/free-solid-svg-icons";
import {faTwitter, faPinterest, faFacebook, faFontAwesome} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Navbar = () => {
  const [geoDropdown, setGeoDropdown] = useState(false);

  const toggleGeoDropdown = () => setGeoDropdown(geoDropdown);

  return (
    <div className="navbar-container">
    <div className="navbar-menu">
      <div className="contact-links-mobile">
      <a className="contact-link" href="tel:9165420274">
        <FontAwesomeIcon className="contact-icon" icon={faPhone}/>
      </a>
      <a className="contact-link" href="mailto: jon@acceleratedrg.com">
      <FontAwesomeIcon className="contact-icon" icon={faEnvelope}/>
      </a>
      </div>
      <img className="navbar-image" src={smallImage} alt="small-logo" />
      <div className="mobile-dropdown">
          <button className="mobile-menu">
            <FontAwesomeIcon icon={faBars}/>
          </button>
          <div className="dropdown-content-mobile">
          <a href="/Home">Home</a>
          <a href="/Buy">Buy</a>
          <a href="/Sell">Sell</a>
        </div>
        </div>
        <div className="navbar-navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Buy">Buying</Link>
        </li>
        <li>
          <Link to="/Sell">Selling</Link>
        </li>
        <div className="dropdown">
          <button className="button-geo">Regions of Expertise</button>
          <div className="dropdown-content">
          <a href="/Sell">Placer County</a>
          <a href="/Sell">El Dorado County</a>
          <a href="/Sell">Sacramento County</a>
        </div>
        </div>
        </div> 
      <div className="navbar-links">

      <span>Phone: &nbsp;</span>
      <a className="contact-link" href="tel:9165420274">
        (916)542-0274
      </a>
      <span>&nbsp; &nbsp; E-mail:  &nbsp;</span>
      <a className="contact-link" href="mailto: jon@acceleratedrg.com">
      jon@acceleratedrg.com
      </a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
