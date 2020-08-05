import React from "react";
import Navbar from "../Components/Navbar-component/Navbar";
import Testimonies from "../Components/Testimonies-component/Testimonies";
import AboutInfo from "../Components/AboutInfo-component/About";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <AboutInfo />
        <Testimonies />
      </div>
    );
  }
}

export default Home;
