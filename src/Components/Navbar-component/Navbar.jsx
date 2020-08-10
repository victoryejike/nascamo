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
              <Link className="navLinks" to="/">
                home
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/blog">
                blog
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/scamcatalogue">
                catalogue
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav className="navaccessLinks">
          <ul>
            <li>
              <Link className="navLinks" to="/signin">
                sign in
              </Link>
            </li>
            <li>
              <Link className="navLinks" to="/signup">
                join
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
