import React from "react";
//import { Link } from "react-router-dom";
import "./Poster.css";

const About = () => {
  return (
    <article className="mw7 center ph3 ph5-ns tc br2 pv5 mb5 washed-green">
      <h1>Shining the light on Fraud</h1>
      {/* <h2 style={{ color: "#ffffba" }} className="fw2 f4 lh-copy mt0 mb3">
        Search our extensive scam catalogue
      </h2> */}
      <input
        style={{
          height: 50,
          width: 400,
          outline: "none",
          borderColor: "white",
        }}
        className="hover-bg-black hover-white w-100"
        type="search"
        name="searchBox"
        placeholder="Search our extensive catalogue"
      />
      <button className=" no-underline grow pv2 ph3 dib mr3">Search</button>
      {/* <p style={{ color: "white" }} className="fw1 f5 mt0 mb3">
        Sign up to be up to date with their latest techniques.
      </p> */}
      <div>
        {/* <Link
          className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
          to="/signup"
        >
          Sign Up
        </Link>
        <Link
          className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
          to="/about"
        >
          Learn More
        </Link> */}
      </div>
    </article>
  );
};

export default About;
