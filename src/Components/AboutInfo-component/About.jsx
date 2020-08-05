import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <article className="mw7 center ph3 ph5-ns tc br2 pv5 mb5">
      <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">Join us today</h1>
      <h2 className="fw2 f4 lh-copy mt0 mb3">
        The number one site in Nigeria making scam detection available for
        everyone
      </h2>
      <p className="fw1 f5 mt0 mb3">
        Sign up to be up to date with their latest techniques.
      </p>
      <div>
        <Link
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
        </Link>
      </div>
    </article>
  );
};

export default About;
