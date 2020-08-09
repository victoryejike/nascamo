import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header-component/Header";
import Footer from "../../Components/Footer-component/Footer";
import Subscribe from "../../Components/Subscribe-component/Subscribe";

const Signin = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label
                  style={{ color: "rgb(255, 94, 0)" }}
                  className="db fw6 lh-copy f6"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label
                  style={{ color: "rgb(255, 94, 0)" }}
                  className="db fw6 lh-copy f6"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <label className="pa0 ma0 lh-copy f6 pointer">
                <input type="checkbox" /> Remember me
              </label>
            </fieldset>
            <div className>
              <input
                style={{ backgroundColor: "rgb(255, 94, 0)", color: "white" }}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                defaultValue="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <Link to="/signup" className="f6 link dim black db">
                Sign up
              </Link>
              <Link to="#" className="f6 link dim black db">
                Forgot your password?
              </Link>
            </div>
          </form>
        </main>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Signin;
