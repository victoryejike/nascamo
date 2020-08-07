import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div>
      <hr className="line"></hr>
      <p className="subscribe">Subscribe</p>
      <div className="pa4-l">
        <form className=" mw7 center pa4 ba b--black-10">
          <fieldset className="cf bn ma0 pa0">
            <legend className="pa0 f5 f4-ns mb3 black-80">
              Sign up for our newsletter
            </legend>
            <div className="cf">
              <label className="clip" htmlFor="email-address">
                Email Address
              </label>

              <div className="measure">
                <label htmlFor="name" className="f6 b db mb2">
                  Email
                </label>
                <input
                  id="name"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  aria-describedby="name-desc"
                />
              </div>

              <input
                className="line f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                type="submit"
                defaultValue="Subscribe"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
