import React from "react";
import { Link } from "react-router-dom";
//import { ReactComponent as Logo } from "../../assets/scam-alert.svg";
import SearchBox from "../SearchBox-component/SearchBox";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
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
        <nav className="accessLinks">
          <ul>
            <li>
              <SearchBox />
            </li>
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

export default Header;
