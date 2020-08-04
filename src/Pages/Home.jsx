import React from "react";
import Navbar from "../Components/Navbar-component/Navbar";
import Testimony from "../Components/Testimony-component/Testimony";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Testimony />
      </div>
    );
  }
}

export default Home;
