import React from "react";
import Testimony from "../Testimony-component/Testimony";
import Logo from "../../assets/avatar-michelle.jpg";
import "./Testimonies.css";

class Testimonies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFeedbacks: [
        {
          id: 1,
          avatar: <img className="avatar" src={Logo} alt="" />,
          feedback: "I love this website",
          username: "vee",
        },
        {
          id: 2,
          avatar: <img className="avatar" src={Logo} alt="" />,
          feedback: "Easy to use",
          username: "Lilo",
        },
        {
          id: 3,
          avatar: <img className="avatar" src={Logo} alt="" />,
          feedback: "Saved me a lot",
          username: "Ozo",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2 className="testimoniesBgColor">Testimonies</h2>
        {this.state.userFeedbacks.map((userFeedback) => (
          <Testimony
            image={userFeedback.avatar}
            testimony={userFeedback.feedback}
            author={userFeedback.username}
          />
        ))}
      </div>
    );
  }
}

export default Testimonies;
