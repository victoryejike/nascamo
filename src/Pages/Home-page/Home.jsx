import React from "react";
import Navbar from "../../Components/Navbar-component/Navbar";
//import Testimonies from "../../Components/Testimonies-component/Testimonies";
import Poster from "../../Components/Poster-component/Poster";
import About from "../../Components/About-component/About";
import Footer from "../../Components/Footer-component/Footer";
import Subscribe from "../../Components/Subscribe-component/Subscribe";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Poster />
        <About />
        {/* <Testimonies /> */}
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Home;
