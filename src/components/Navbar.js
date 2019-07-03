import React from "react";
import { Link } from "@reach/router";
// import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <Link to="/">Home</Link>
      <Link to="CurrentConditions">Current Conditions</Link>
      <Link to="CurrentSummary">Current Summary</Link>
      <Link to="Hourly">Hourly</Link>
      <Link to="Daily">Daily</Link>
    </div>
  );
}

export default Navbar;
