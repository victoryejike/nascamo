import React from "react";
import Navbar from "../../Components/Navbar-component/Navbar";
//import Testimonies from "../../Components/Testimonies-component/Testimonies";
import AboutInfo from "../../Components/AboutInfo-component/About";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <AboutInfo />
        {/* <Testimonies /> */}
      </div>
    );
  }
}

export default Home;
