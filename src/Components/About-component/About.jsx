import React from "react";
import "./About.css";
//import image from "../../assets/About/AboutUs5.jpg";

const About = () => {
  return (
    <div className="padbottom">
      <p className="aboutHeader text">About Us</p>
      <div className="AboutUs">
        <div className="tabs mw8 center mt5">
          <div className="tabs__menu flex mb5 bb b--black-20">
            <label
              htmlFor="section1"
              className=" text tabs__menu-item w-third tc bg-white pt4 pb4 bg-animate hover-bg-white pointer red"
            >
              Who We Are
            </label>
            <label
              htmlFor="section2"
              className="text tabs__menu-item w-third tc pt4 pb4 bg-animate hover-bg-white pointer"
            >
              What We Do
            </label>
            <label
              htmlFor="section3"
              className="text tabs__menu-item w-third tc pt4 pb4 bg-animate hover-bg-white pointer"
            >
              How we Do It
            </label>
          </div>
          <div className="tabs__content">
            <div>
              <input
                type="radio"
                className="dn"
                name="sections"
                id="section1"
                defaultChecked
              />
              <div className="text tabs__content__info">
                <p>
                  For those who have seen the Earth from space, and for the
                  hundreds and perhaps thousands more who will, the experience
                  most certainly changes your perspective. The things that we
                  share in our world are far more valuable than those which
                  divide us.
                </p>
                <p>Houston, Tranquillity Base here. The Eagle has landed.</p>
              </div>
            </div>
            <div>
              <input
                type="radio"
                className="dn"
                name="sections"
                id="section2"
              />
              <div className="text tabs__content__info">
                <p>
                  What was most significant about the lunar voyage was not that
                  man set foot on the Moon but that they set eye on the earth.
                </p>
                <p>
                  Where ignorance lurks, so too do the frontiers of discovery
                  and imagination.
                </p>
              </div>
            </div>
            <div>
              <input
                type="radio"
                className="dn"
                name="sections"
                id="section3"
              />
              <div className="text tabs__content__info">
                <p>
                  We are all connected; To each other, biologically. To the
                  earth, chemically. To the rest of the universe atomically.
                </p>
                <p>
                  Spaceflights cannot be stopped. This is not the work of any
                  one man or even a group of men. It is a historical process
                  which mankind is carrying out in accordance with the natural
                  laws of human development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
