import React from "react";
import Navbar from "../Components/Navbar-component/Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div>
        <form>
          <label>Firstname</label>
          <input type="text" name="name" placeholder="Enter Name" required />
          <br></br>
          <label>Lastname</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter last name"
            required
          />
          <br></br>
          <label>Username</label>
          <input type="text" name="username" placeholder="Enter username" />
          <br></br>
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
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
