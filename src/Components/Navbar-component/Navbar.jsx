import React from "react";
import { Link } from "react-router-dom";
//import { ReactComponent as Logo } from "../../assets/scam-alert.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="users">
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/scamcatalogue">catalogue</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signin">sign in</Link>
            </li>
            <li>
              <Link to="/signup">join</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
