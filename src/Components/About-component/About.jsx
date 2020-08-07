import React from "react";
import "./About.css";
//import image from "../../assets/About/AboutUs5.jpg";

const About = () => {
  return (
    <div className="AboutUs">
      <div className="AboutImage">
        <div className="aboutHeader">
          <h2>Who we are</h2>
        </div>
        <div className="aboutText">
          <p>
            We are a group of talented individuals who have experienced fraud in
            one way or the other and have made a vow to keep fraaudsters at bay
            for everyone
          </p>
        </div>
      </div>
      <div className="AboutImage">
        <div className="aboutHeader">
          <h2>What We Do</h2>
        </div>
        <div className="aboutText">
          <p>
            We provide the you with information about fraudsters and their
            techniques through an open source network made up of the Nigerian
            people
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
