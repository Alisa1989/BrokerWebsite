import React from "react";
import "./Geography.css";
import { Outlet } from "react-router-dom";
import ElDorado from "./ElDorado";
import Sacramento from "./Sacramento";

const Geography = () => {

  return (
    <div>
      <h1>Regions of expertise</h1>
      <Outlet/>
    </div>
  );
};

export default Geography;
