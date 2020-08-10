import React from "react";
import Navbar from "../../Components/Navbar-component/Navbar";
import ScamCatalogue from "../ScamCatalogue-page/ScamCatalogue";
import Hotgist from "../../Components/Hotgist-component/Hotgist";
import SearchBox from "../../Components/SearchBox-component/SearchBox";
//import Poster from "../../Components/Poster-component/Poster";
//import About from "../../Components/About-component/About";
//import Footer from "../../Components/Footer-component/Footer";
//import Subscribe from "../../Components/Subscribe-component/Subscribe";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <SearchBox />
        <div className="flexContainer">
          <div className="scamContainer">
            <ScamCatalogue />
            <ScamCatalogue />
          </div>
          <div className="gistContainer">
            <Hotgist />
          </div>
        </div>

        {/* <Poster /> */}
        {/* <About />
        <Subscribe /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;
