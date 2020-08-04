import React from "react";
import Particles from "react-particles-js";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Particles
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Body;
