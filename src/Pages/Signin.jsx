import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar-component/Navbar";

const Signin = () => {
  return (
    <div>
      <Navbar />
      <div>
        <form>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter Email" required />
          <br></br>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
          <button type="submit">Login</button>
          <p>
            Already a member?{" "}
            <span>
              <Link to="signup">SignUp</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
