import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import smallImage from "../../images/jhesse.jpg";
import { faPhone, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-menu">
        <div className="contact-links-mobile">
          <a className="contact-link" href="tel:9165420274">
            <FontAwesomeIcon className="contact-icon" icon={faPhone} />
          </a>
          <a className="contact-link" href="mailto: jon@acceleratedrg.com">
            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
          </a>
        </div>
        <Link to="/">
          <img className="navbar-image" src={smallImage} alt="small-logo" />
        </Link>
        <div className="mobile-dropdown">
          <button className="mobile-menu">
            <FontAwesomeIcon className="bars" icon={faBars} />
          </button>
          <div className="dropdown-content-mobile">
            <Link to="/">Home</Link>
            <Link to="/Buy">Buying</Link>
            <Link to="/Sell">Selling</Link>
            <Link to="/Regions">Regions</Link>
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
            <Link to="/Regions" className="button-geo">
              Regions of Expertise
            </Link>
            <div className="dropdown-content"></div>
          </div>
        </div>
        <div className="navbar-links">
          <span>Phone: &nbsp;</span>
          <a className="contact-link" href="tel:9165420274">
            (916)542-0274 &nbsp; &nbsp;
          </a>
          <span> E-mail: </span>
          <a className="contact-link" href="mailto: jon@acceleratedrg.com">
            &nbsp; jon@acceleratedrg.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
