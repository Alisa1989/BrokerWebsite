import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>Navbar</h2>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Buy">Buy</Link>
        </li>
        <li>
          <Link to="/Sell">Sell</Link>
        </li>
    </div>
  );
};

export default Navbar;
