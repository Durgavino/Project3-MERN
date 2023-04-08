import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Navbar() {
  return (
    <>
      <nav className="nav">
      <img className="logo" src={Logo} alt="logo" />
        {/* <Link className="logo" to="/logo">
          Sleepy Head
        </Link> */}
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
