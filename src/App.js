import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../src/Pages/Home-page/Home";
import Blog from "../src/Pages/Blog-page/Blog";
import ScamCatalogue from "./Pages/ScamCatalogue-page/ScamCatalogue";
import Signin from "../src/Pages/Signin-page/Signin";
import Signup from "./Pages/Signup-page/Signup";
import SingleBlogPost from "../src/Pages/SingleBlogPost-component/SingleBlogPost";
//import Loader from "../src/Components/Loader-component/Loader";
//import Particles from "react-particles-js";

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//   },
// };

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Loader /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:id" component={SingleBlogPost} />
          <Route path="/scamcatalogue" component={ScamCatalogue} />
        </Switch>
      </div>
    );
  }
}

export default App;
